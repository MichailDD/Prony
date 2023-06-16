import React from 'react';
import './ButtonWrapperForm.scss';

const ButtonWrapperForm = ({ children, style, client }) => {
	return (
		<div className={`button-wrap ${client ? 'client':''}`} style={style}>
			{children}
		</div>
	);
}

export default ButtonWrapperForm;