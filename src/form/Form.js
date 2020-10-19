import React, { Component } from "react";

import CustomerInfo from "./customer-info";
import ShippingInfo from "./shipping-info";

export default class Form extends Component {
	state = {
		name: "",
		surname: "",
		address: "",
		country: "",
		city: "",
		code: "",
		phone: "",
		metodDelivery: "",

		inputSelectorName: null,
		navSelector: null,

		nameValidation: false,
		phoneValidation: false,

		renderCustomerInfo: true,
		renderShippingInfo: false,
	};

	componentDidMount() {
		const selector = document.querySelector(".input-js");
		const navigation = document.querySelectorAll(".form-nav__item");

		this.setState({
			inputSelectorName: selector,
		});

		this.setState({
			navSelector: navigation,
		});
	}

	componentDidUpdate() {
		".form-nav__item--active";
		const { navSelector, renderCustomerInfo, renderShippingInfo } = this.state;
		navSelector.forEach((el) => el.classList.remove("form-nav__item--active"));
		if (renderCustomerInfo) {
			navSelector[0].classList.add("form-nav__item--active");
		} else if (renderShippingInfo) {
			navSelector[1].classList.add("form-nav__item--active");
		}
	}

	btnValidation = (phone) => {
		this.setState({
			phoneValidation: false,
		});
		if (phone.length === 13) {
			this.setState({
				phoneValidation: true,
			});
		}
	};

	onHandleChange = (e) => {
		const { name, value } = e.target;

		if (name === "name") {
			this.inputValidation(value);
		}

		this.setState({
			[name]: value,
		});
	};

	onHandleChangePhone = (e) => {
		const { value } = e.target;
		const phoneNumber = value.replace(/[.,/^&*;:{}=\-_`~()]/g, "");
		this.btnValidation(phoneNumber);

		this.setState({
			phone: phoneNumber,
		});
	};

	inputValidation(value) {
		const { inputSelectorName } = this.state;
		const regExp = new RegExp("^[а-яА-ЯёЁa-zA-Z]+$");
		if (value === "") {
			this.setState({
				nameValidation: false,
			});
			return inputSelectorName.classList.remove("info-customer__input--error");
		}
		if (!regExp.test(value) || value.length < 3) {
			this.setState({
				nameValidation: false,
			});
			return inputSelectorName.classList.add("info-customer__input--error");
		}
		this.setState({
			nameValidation: true,
		});
		inputSelectorName.classList.remove("info-customer__input--error");
		return true;
	}

	onRenderTogleStep = () => {
		this.setState((state) => {
			return {
				renderCustomerInfo: !state.renderCustomerInfo,
				renderShippingInfo: !state.renderShippingInfo,
			};
		});
	};

	render() {
		return (
			<div className="form-wrapper">
				<div className="form " role="group">
					<div className="container">
						<nav className="form-nav">
							<ul className="form-nav__list list-style">
								<li className="form-nav__item">01 Customer info</li>
								<li className="form-nav__item">02 shipping info</li>
								<li className="form-nav__item">03 payment selection</li>
							</ul>
						</nav>

						{this.state.renderCustomerInfo ? (
							<CustomerInfo
								user={this.state}
								onHandleChange={this.onHandleChange}
								onHandleChangePhone={this.onHandleChangePhone}
								nameValidation={this.state.nameValidation}
								phoneValidation={this.state.phoneValidation}
								onRenderTogleStep={this.onRenderTogleStep}
							/>
						) : null}

						{this.state.renderShippingInfo ? (
							<ShippingInfo
								user={this.state}
								onHandleChange={this.onHandleChange}
								onHandleChangePhone={this.onHandleChangePhone}
								nameValidation={this.state.nameValidation}
								phoneValidation={this.state.phoneValidation}
								onRenderTogleStep={this.onRenderTogleStep}
							/>
						) : null}
					</div>
				</div>
			</div>
		);
	}
}
