import React, { useState } from "react";
import '../Forms.scss';

const InputFormBig = ({
	type,
	ph,
	name,
	value,
	setValue,
	style,
	error,
	view
}) => {

	const [typeInp, setTypeInp] = useState(type ? type : 'text')

	const onInputChangeHandler = e => { setValue(e.currentTarget.value) }
	const onViewClickHandler = e => {
		if (typeInp === 'text') {
			setTypeInp('password');
			e.currentTarget.classList.remove('view')
		} else {
			setTypeInp('text');
			e.currentTarget.classList.add('view')
		}
		
	}

	let styleErr = error ? 'error' : '';
	let styleView = view ? 'view-pass' : '';

	return (
		<div className="input-wrap">
			<input
				style={style ? style : {}}
				className={`input ${styleView} ${styleErr}`}
				type={typeInp}
				placeholder={ph ? ph : ''}
				name={name ? name : ''}
				aria-label={name ? name : ''}
				value={value}
				onChange={e => { onInputChangeHandler(e) }}
			/>
			{view
				? <button
					onClick={e=>{onViewClickHandler(e)}}
					className='input__view-btn'></button>
				: <></>
			}
		</div>
	)
}

export default InputFormBig;