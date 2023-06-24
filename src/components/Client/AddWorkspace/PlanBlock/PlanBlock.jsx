import React, { useState } from "react";
import './PlanBlock.scss';

const PlanBlock = ({ title, list }) => {
	const [listState, setListState] = useState(list);

	const onItemClickHandler = (id) => {
		let newList = [...listState];

		for (let el of newList) {
			el.clicked = false;

			if (id === el.id) {
				el.clicked = true;
			}
		}

		setListState([...listState]);
	}

	return (
		<div className="add-ws-plan">
			<h2 className="add-ws__item-title">{title}</h2>

			<ul className="add-ws-plan__list">
				{listState.map(el => (
					<li
						key={el.id}
						className={`add-ws-plan__item ${el.clicked ? 'active' : ''}`}
						onClick={() => { onItemClickHandler(el.id) }}
					>
						{el.title}
					</li>
				))}
			</ul>
		</div>
	)
}

export default PlanBlock;