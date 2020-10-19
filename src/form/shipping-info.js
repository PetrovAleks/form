import React, { Component } from "react";

import GoogleApiWrapper from "./gMaps";

export default class ShippingInfo extends Component {
	componentDidMount() {}

	render() {
		const {
			name,
			surname,
			address,
			country,
			city,
			code,
			phone,
		} = this.props.user;
		const {
			onHandleChange,

			onRenderTogleStep,
		} = this.props;
		return (
			<div className="shipping-wrapepr">
				<h2 className="title">Shipping information</h2>
				<div className="shipping-info-wrapper">
					<div className="list-info-wrapper">
						<ul className="shipping-info__list list-style">
							<li className="shipping-info__item">Name: {name}</li>
							<li className="shipping-info__item">
								Surname: {surname ? surname : "Не указали"}
							</li>
							<li className="shipping-info__item">
								Country: {country ? country : "Не указали"}
							</li>
							<li className="shipping-info__item">
								Сity: {city ? city : "Не указали"}
							</li>

							<li className="shipping-info__item">
								Сode: {code ? code : "Не указали"}
							</li>
							<li className="shipping-info__item">
								address: {address ? address : "Не указали"}{" "}
							</li>

							<li className="shipping-info__item">Phone: {phone}</li>
						</ul>
						<div className="btn-wrapper">
							<button className="shipping-info__btn"> Edit Address</button>
							<button className="shipping-info__btn">Add New</button>
						</div>
					</div>
					<div className="shipping-map-wrapper" id="map">
						<div className="container-map">
							<GoogleApiWrapper />
						</div>
					</div>
				</div>
				<h2 className="title">Shipping metod</h2>
				<div className="shipping-method-wrapper">
					<ul className="shipping-method__list list-style">
						<li className="shipping-method__item">
							<label className="shipping-method__btn">
								<div className="method-btn-wrapper">
									<input
										onChange={onHandleChange}
										className="shipping-method__input"
										type="radio"
										name="metodDelivery"
										value="Free"
									/>
									<span className="shipping-method__name">
										Standart Delivery
									</span>
									<span className="shipping-method__cost">Free</span>
								</div>
								<p className="method-btn__text">
									Freebie checkout form of the third step in sketchapp. Feel
									free to download and use it for your project.
								</p>
							</label>
						</li>

						<li className="shipping-method__item">
							<label className="shipping-method__btn">
								<div className="method-btn-wrapper">
									<input
										onChange={onHandleChange}
										className="shipping-method__input"
										type="radio"
										name="metodDelivery"
										value="8.00 uah"
									/>
									<span className="shipping-method__name">Fast Delivery</span>
									<span className="shipping-method__cost">8.00 uah</span>
								</div>

								<p className="method-btn__text">
									Freebie checkout form of the third step in sketchapp. Feel
									free to download and use it for your project.
								</p>
							</label>
						</li>
					</ul>
				</div>
				<div className="btn-wrapper">
					<button
						className="form-btn form-btn--return"
						onClick={onRenderTogleStep}
					>
						Back to Customer Info
					</button>
					<button className="form-btn">Continue to Payment</button>
				</div>
			</div>
		);
	}
}
