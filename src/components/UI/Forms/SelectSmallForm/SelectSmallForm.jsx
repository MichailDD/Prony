import React, { useState } from 'react';
import './SelectSmallForm.scss';
import SelectPostSort from './SelectPostSort/SelectPostSort';


const SelectSmallForm = ({ sortList, showList }) => {
	return (
		<div className='sort-posts'>
			{sortList
				? <div className="sort-posts__sort">
					<p className="sort-posts__title">Sort by:</p>
					<SelectPostSort state={sortList} />
				</div>
				: <></>
			}
			{showList
				? <div className="sort-posts__show">
					<p className="sort-posts__title">Show:</p>
					<SelectPostSort state={showList} />
					<p className="sort-posts__title">per page</p>
				</div>
				: <></>
			}

		</div>
	)
}

export default SelectSmallForm;