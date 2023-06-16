import React from "react";
import '../Forms.scss';

const TextareaForm = ({
	ph,
	name,
	value,
	setValue,
	style }) => {

	const onInputChangeHandler = e => { setValue(e.currentTarget.value) }

	return (
		<>
			<textarea
				style={style ? style : {}}
				className='textarea'
				placeholder={ph ? ph : ''}
				name={name ? name : ''}
				aria-label={name ? name : ''}
				value={value}
				onChange={e => { onInputChangeHandler(e) }}
			/>
		</>
	)
}

export default TextareaForm;