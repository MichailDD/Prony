import React from "react";
import './ClearBtn.scss';

const ClearBtn = ({ title, style, blue }) => {
	return (
		<button
			style={style ? style : {}}
			className={`clear-btn ${blue ? 'blue' : ''}`}>
			{title}
		</button>
	)
}

export default ClearBtn;