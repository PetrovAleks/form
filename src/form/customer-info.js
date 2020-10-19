import React from "react";
import InputMask from "react-input-mask";

const CustomerInfo = (props) => {
	const { name, surname, address, country, city, code, phone } = props.user;
	const {
		onHandleChange,
		onHandleChangePhone,

		nameValidation,
		phoneValidation,
		onRenderTogleStep,
	} = props;
	return (
		<>
			<h2 className="title">Customer information</h2>
			<ul className="info-customer__list list-style">
				<li className="info-customer__item">
					<label className="info-customer__label">
						<span>Ferst name *</span>

						<input
							onChange={onHandleChange}
							className="info-customer__input input-js"
							type="text"
							name="name"
							value={name}
						/>
					</label>
				</li>
				<li className="info-customer__item">
					<label className="info-customer__label">
						<span>Surname</span>
						<input
							onChange={onHandleChange}
							className="info-customer__input"
							value={surname}
							type="text"
							name="surname"
						/>
					</label>
				</li>
				<li className="info-customer__item ">
					<label className="info-customer__label ">
						<span>Address</span>
						<input
							onChange={onHandleChange}
							className="info-customer__input "
							value={address}
							type="text"
							name="address"
						/>
					</label>
				</li>
				<li className="info-customer__item">
					<label className="info-customer__label">
						<span>Country</span>
						<input
							onChange={onHandleChange}
							className="info-customer__input"
							value={country}
							type="text"
							name="country"
						/>
					</label>
				</li>
				<li className="info-customer__item">
					<label className="info-customer__label">
						<span>City</span>

						<input
							onChange={onHandleChange}
							className="info-customer__input"
							value={city}
							type="text"
							name="city"
						/>
					</label>
				</li>
				<li className="info-customer__item">
					<label className="info-customer__label">
						<span>Postal code</span>
						<input
							onChange={onHandleChange}
							className="info-customer__input"
							type="number"
							name="code"
							value={code}
						/>
					</label>
					<button className="input-btn">Find</button>
				</li>
				<li className="info-customer__item">
					<label className="info-customer__label ">
						<span>Phone *</span>
						<InputMask
							mask="+380(99)-999-99-99"
							onChange={onHandleChangePhone}
							alwaysShowMask={true}
							value={phone}
							name={name}
							className={"info-customer__input "}
						></InputMask>
					</label>
				</li>
			</ul>
			<div className="btn-wrapper">
				<button className="form-btn form-btn--return">Return to shop</button>
				<button
					onClick={onRenderTogleStep}
					className="form-btn"
					disabled={!nameValidation || !phoneValidation ? true : false}
				>
					Continue to shop
				</button>
			</div>
		</>
	);
};
export default CustomerInfo;
