import React from "react";
import './Status.scss';

const Status = ({ status, style }) => {

	let labelColor = getStatusColor(status);

	function getStatusColor(status) {
		switch (status) {
			case 'Complete':
				return '#43A047';
			case 'In progress':
				return '#F2C94C'
			default:
				return '#fff'
		}
	}

	return (
		<div style={style ? style : {}} className='status'>
			<span
				className='status__label'
				style={{ background: labelColor }}></span>
			<span className='status__title'>{status}</span>
		</div>
	)
}

export default Status;