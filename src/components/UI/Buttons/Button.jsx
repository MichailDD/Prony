import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

const Button = ({ url, onClick, children, style, color }) => {

	let red = (color === 'red') ? 'red' : '';

	return (
		<Link
			to={url}
			style={style ? style : {}}
			className={`button ${red}`}
			onClick={onClick}
		>
			{children}
		</Link>
	);
}

export default Button;