import React from "react";
import { Route, Routes } from "react-router-dom";
import './Breadcrumbs.scss';

const Breadcrumbs = props => {
	return (
		<div className='breadcrumbs'>
			<div className="container">
				<ul className="breadcrumbs__list">
					<li className="breadcrumbs__item">Client</li>
					<li className="breadcrumbs__item">Workspaces</li>
				</ul>
			</div>
		</div>
	)
}

export default Breadcrumbs;