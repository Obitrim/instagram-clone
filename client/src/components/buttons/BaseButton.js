import React from 'react';
import propTypes from 'prop-types';
import "../../styles/buttons/BaseButton.css";

const BaseButton = ({type, btnText, onClick}) => {
	return (
		<button className="BaseButton" type={type} onClick={onClick}>{btnText}</button>
	)
}

BaseButton.propTypes = {
	type: propTypes.string,
	btnText: propTypes.string,
	onClick: propTypes.func
}

BaseButton.defaultProps = {
	type: "button",
	btnText: "Button"
}

export default BaseButton;