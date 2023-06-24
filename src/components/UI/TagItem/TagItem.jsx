import React from "react";
import './TagItem.scss';

const TagItem = ({ title, style }) => {

	return (
		<div style={style ? style : {}} className='tag'>
			{title}
		</div>
	)
}

export default TagItem;