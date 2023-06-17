import React from "react";
import Button from "../../../UI/Buttons/Button";
import './ItemBillingClient.scss';

const ItemBillingClient = ({ plan, suggest, member, price, date, titleBtn, color, style }) => {

	return (
		<li className="item-billing label"
			style={style}>
			{color
				? <span className="item-billing__label"
					style={{ background: color }}></span>
				: <span className="item-billing__label"></span>
			}
			<div className="item-billing__wrap-info">
				<h3 className="item-billing__title">{plan.title}</h3>
				<p className="item-billing__text">{plan.value}</p>
			</div>

			<div className="item-billing__wrap-info">
				<h3 className="item-billing__title">{suggest.title}</h3>
				<p className="item-billing__text">{suggest.value}</p>
			</div>

			<div className="item-billing__wrap-info">
				<h3 className="item-billing__title">{member.title}</h3>
				<p className="item-billing__text">{member.value}</p>
			</div>

			<div className="item-billing__wrap-info">
				<h3 className="item-billing__title">{price.title}</h3>
				<p className="item-billing__text">
					{date ? price.value : '$' + price.value + '/mo'}
				</p>
			</div>

			{date
				?
				<div className="item-billing__wrap-info">
					<h3 className="item-billing__title">{date.title}</h3>
					<p className="item-billing__text">{date.value}</p>
				</div>
				:
				<Button style={{
					background: color,
					width: '165px'
				}}>{titleBtn}</Button>
			}
		</li>
	)
}

export default ItemBillingClient;