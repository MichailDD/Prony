import React, { useState } from "react";
import { v1 } from "uuid";
import { ArrowLeftIcon } from "../SVGIcons/SVGIcons";
import './NavPages.scss';

let pages = [
	{
		id: v1(),
		num: 1,
		clicked: true
	},
	{
		id: v1(),
		num: 2,
		clicked: false
	},
	{
		id: v1(),
		num: 3,
		clicked: false
	},
	{
		id: v1(),
		num: 4,
		clicked: false
	},
	{
		id: v1(),
		num: 5,
		clicked: false
	},
]

const NavPages = ({ style }) => {
	let [list, setList] = useState(pages);

	const onNumPageClickHandler = (id) => {
		let newList = [...list];

		newList.forEach(el => {
			el.clicked = false;

			if (id === el.id) {
				el.clicked = true;
			}
		})

		setList([...newList]);
	}

	return (
		<div style={style ? style : {}}
			className='nav-pages'>
			<button className='nav-pages__first-btn nav-pages__btn'>
				<ArrowLeftIcon />
				<ArrowLeftIcon />
			</button>

			<button className='nav-pages__prev-btn nav-pages__btn'>
				<ArrowLeftIcon />
			</button>

			<ul className="nav-pages__list">
				{
					list.map(el => (
						<li
							key={el.id}
							className={`nav-pages__item ${el.clicked ? 'active' : ''}`}
							onClick={() => { onNumPageClickHandler(el.id) }}
						>{el.num}</li>
					))
				}
			</ul>

			<button className='nav-pages__next-btn nav-pages__btn'>
				<ArrowLeftIcon />
			</button>

			<button className='nav-pages__last-btn nav-pages__btn'>
				<ArrowLeftIcon />
				<ArrowLeftIcon />
			</button>
		</div>
	)
}

export default NavPages;