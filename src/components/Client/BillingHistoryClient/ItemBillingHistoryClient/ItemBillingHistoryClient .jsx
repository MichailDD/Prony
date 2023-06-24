import React from "react";
import './ItemBillingHistoryClient .scss';

const ItemBillingHistoryClient = ({ date, amount }) => {

	return (
		<li className="item-billing-history">
			<p className="item-billing-history__item date">
				{date}
			</p>
			<p className="item-billing-history__item amount">
				{'$' + amount}
			</p>
		</li>
	)
}

export default ItemBillingHistoryClient;