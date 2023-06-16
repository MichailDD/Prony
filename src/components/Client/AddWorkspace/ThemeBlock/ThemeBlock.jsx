import React, { useState } from "react";
import './ThemeBlock.scss';
import ThemeItem from "./ThemeItem/ThemeItem";

const ThemeBlock = ({ title, list }) => {
	const [stateList, setStateList] = useState(list)
	const [themeSelect, setThemeSelect] = useState('theme1');

	const onItemClickHandler = (name) => {
		let newList = [...stateList];

		newList.forEach(el => {
			el.clicked = false;

			if (el.name === name) {
				el.clicked = true;
			}
		})

		setStateList([...newList]);
	}

	return (
		<div className="add-ws-themes">
			<h2 className="add-ws__item-title">{title}</h2>
			<ul className="add-ws-themes__list">
				{stateList.map(el => (
					<ThemeItem key={el.id}
						colors={el.colors}
						type={el.type}
						bg={el.bg}
						icon={el.icon}
						name={el.name}
						clicked={el.clicked}
						onClickHandler={onItemClickHandler}
					/>
				))

				}
			</ul>
		</div>
	)
}

export default ThemeBlock;