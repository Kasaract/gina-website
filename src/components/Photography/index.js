import React from 'react';

import './photography.scss';

const Photography = () => {
	return (
		<div className="photography-wrapper">
			<div className="section">
				<div className="header heading-text">Events</div>
				<div className="photo-row">
					<div className="photo square" />
					<div className="photo rectangle" />
					<div className="photo square" />
					<div className="photo rectangle" />
					<div className="photo square" />
					<div className="photo rectangle" />
					<div className="photo square" />
				</div>
				<div className="photo-row">
					<div className="photo rectangle" />
					<div className="photo square" />
					<div className="photo rectangle" />
					<div className="photo rectangle" />
					<div className="photo rectangle" />
					<div className="photo rectangle" />
				</div>
			</div>
			<div className="section">
				<div className="header heading-text">Sports</div>
				<div className="photo-row">
					<div className="photo rectangle" />
					<div className="photo square" />
					<div className="photo rectangle" />
					<div className="photo rectangle" />
					<div className="photo rectangle" />
					<div className="photo rectangle" />
				</div>
				<div className="photo-row">
					<div className="photo square" />
					<div className="photo rectangle" />
					<div className="photo square" />
					<div className="photo rectangle" />
					<div className="photo square" />
					<div className="photo rectangle" />
					<div className="photo square" />
				</div>
			</div>
		</div>
	);
};

export default Photography;
