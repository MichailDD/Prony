import React from "react";
import './ThemeItem.scss';
import check from '../../../../../assets/icons/checked.svg';

const ThemeItem = ({ colors, type, bg, icon, name, onClickHandler, clicked }) => {

	return (
		<li className="item-theme"
			onClick={() => { onClickHandler(name) }}>
			<div
				className={`item-theme__bg ${clicked ? 'active' : ''}`}
				style={{ background: bg }}>
				<img src={check} alt="check" />
			</div>
			{type === 'custom'
				? <div className="item-theme__custom">
					<img
						src={icon ? icon : ""}
						alt="icon"
						className="item-theme__custom-icon" />
					<span>Custom</span>
				</div>
				: <ul className="item-theme__list">
					{colors.map((el, i) => (
						<li
							key={i}
							className='item-theme__color'
							style={{ background: el }}></li>
					))}
				</ul>
			}

		</li>
	)
}

export default ThemeItem;