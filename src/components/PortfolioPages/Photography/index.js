import React from 'react';

import './photography.scss';
import NavBar from '../../../share/NavBar';

const Photography = () => {
	return (
		<>
			<NavBar />
			<div className="photography-wrapper">
				<div className="section-title">
					<div className="title"> photography </div>
				</div>
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
		</>
	);
};

export default Photography;
