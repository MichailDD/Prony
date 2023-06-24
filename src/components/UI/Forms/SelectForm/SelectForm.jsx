import React, { useRef, useState, useEffect } from "react";
import '../Forms.scss';
import selectIcon from '../../../../assets/icons/select-arrow.svg';

const SelectForm = ({ style, list, def, label }) => {
	const [active, setActive] = useState(false);

	let selectHeader = useRef(null);
	let select = useRef(null);

	let firstChild = def ? def : '';

	useEffect(() => {
		function handleClickOutside(event) {
			if (select.current && !select.current.contains(event.target)) {
				setActive(false);
			}
		}

		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [select]);

	const onHeaderClickHandler = () => {
		setActive(!active);
	}

	const onItemClickHandler = e => {
		let current = e.currentTarget.innerHTML;
		selectHeader.current.innerHTML = current;
		onHeaderClickHandler();
	}

	return (
		<div ref={select}
			className={`select ${active ? 'active' : ''}`}
			style={style ? style : {}}>
			<p className="select__header"
				onClick={onHeaderClickHandler}
				ref={selectHeader}>
				{def
					? <span>{def}</span>
					: <>
						<span style={{
							background: list[0].labelBg
						}}
							className="select__item-label"></span>
						<span className="select__item-text">
							{list[0].title}
						</span>
					</>
				}

				<img
					src={selectIcon}
					alt="icon"
					className='select__icon' />
			</p>
			<ul className="select__list">
				{
					list.map((el, i) => (
						<li
							key={i}
							className="select__item"
							onClick={onItemClickHandler}
						>
							{label
								? <>
									<span style={{
										background: el.labelBg
									}}
										className="select__item-label"></span>
									<span className="select__item-text">
										{el.title}
									</span>
								</>
								: el}
						</li>
					))
				}
			</ul>

		</div>
	)
}

export default SelectForm;