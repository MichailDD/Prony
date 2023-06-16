import React from "react";
import './BigTitleClient.scss';

const BigTitleClient = ({ children, mb, }) => {

	return (
		<h1 className='big-title-client'>{children}</h1>
	)
}

export default BigTitleClient;