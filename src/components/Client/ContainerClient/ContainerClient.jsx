import React from "react";
import './ContainerClient.scss';

const ContainerClient = ({ style, children, header }) => {

	return (
		<div className="client-container" style={style ? style : {}}>
			{header
				? <h2 className="client-container__header">{header}</h2>
				: <></>
			}

			<div className="client-container__body">
				{children}
			</div>
		</div>
	)
}

export default ContainerClient;