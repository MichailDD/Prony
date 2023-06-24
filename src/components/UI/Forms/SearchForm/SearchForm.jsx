import React from "react";
import { SearchIcon } from "../../SVGIcons/SVGIcons";
import '../Forms.scss';
import InputForm from "../InputForm/InputForm";

const SearchForm = ({ style, value, setValue, ph }) => {


	return (
		<div style={style ? style : {}}
			className="search-form">
			<InputForm
				style={{
					paddingRight: '34px'
				}}
				ph={ph ? ph : ''}
				name='Search Input'
				value={value}
				setValue={setValue}
			/>
			<button className='search-form__btn'>
				<SearchIcon />
			</button>
		</div>
	)
}

export default SearchForm;