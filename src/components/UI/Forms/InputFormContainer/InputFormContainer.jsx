import React from "react";
import '../Forms.scss';
import InputFormBig from "../InputFormBig/InputFormBig";

const InputFormContainer = ({ style, title, name, type, ph, value, setValue, error,view }) => {


	return (
		<div
			className={`input-container ${error ? 'error' : ''}`} style={style ? style : {}}>
			<h2 className="input-container__title">{title}</h2>
			<InputFormBig
				name={name}
				ph={ph}
				type={type}
				view={view}
				value={value}
				setValue={setValue}
			/>
			<p className="input-container__error">{error}</p>
		</div>
	)
}

export default InputFormContainer;