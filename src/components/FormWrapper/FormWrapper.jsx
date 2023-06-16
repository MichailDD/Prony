import React from "react";
import './FormWrapper.scss';

const FormWrapper = ({ children, style }) => {
	return (
		<div className='form-wrapper' style={style}>
			{children}
		</div>
	)
}

export default FormWrapper;