import React from "react";
import '../Forms.scss';

const InputForm = ({
	type,
	ph,
	name,
	value,
	setValue,
	style,
	error
}) => {

	const onInputChangeHandler = e => { setValue(e.currentTarget.value) }

	return (
		<>
			<input
				style={style ? style : {}}
				className={`input small ${error ? 'error' : ''}`}
				type={type ? type : 'text'}
				placeholder={ph ? ph : ''}
				name={name ? name : ''}
				aria-label={name ? name : ''}
				value={value}
				onChange={e => { onInputChangeHandler(e) }}
			/>
		</>
	)
}

export default InputForm;