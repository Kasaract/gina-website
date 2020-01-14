import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGavel,
	faUsers,
	faBook,
	faCamera,
	faRunning,
	faColumns,
	faPen
} from '@fortawesome/free-solid-svg-icons';

import './portfolio.scss';

const Portfolio = () => {
	return (
		<div className="portfolio-wrapper">
			<div className="section-title">
				<div className="title"> portfolio </div>
			</div>
			<div className="row">
				<div className="card">
					<div className="icon">
						<FontAwesomeIcon
							icon={faGavel}
							style={{ width: '2em', height: '2em' }}
						/>
					</div>
					<div className="card-title">law & ethics</div>
					<div className="card-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod
					</div>
				</div>
				<div className="card">
					<div className="icon">
						<FontAwesomeIcon
							icon={faUsers}
							style={{ width: '2em', height: '2em' }}
						/>
					</div>
					<div className="card-title">leadership & team building</div>
					<div className="card-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod
					</div>
				</div>
				<div className="card">
					<div className="icon">
						<FontAwesomeIcon
							icon={faBook}
							style={{ width: '2em', height: '2em' }}
						/>
					</div>
					<div className="card-title">literary content</div>
					<div className="card-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod
					</div>
				</div>
			</div>

			<div className="row">
				<div className="card">
					<div className="icon">
						<FontAwesomeIcon
							icon={faCamera}
							style={{ width: '2em', height: '2em' }}
						/>
					</div>
					<div className="card-title">photography</div>
					<div className="card-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod
					</div>
				</div>
				<div className="card">
					<div className="icon">
						<FontAwesomeIcon
							icon={faRunning}
							style={{ width: '2em', height: '2em' }}
						/>
					</div>
					<div className="card-title">sports journalism</div>
					<div className="card-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod
					</div>
				</div>
				<div className="card">
					<div className="icon">
						<FontAwesomeIcon
							icon={faColumns}
							style={{ width: '2em', height: '2em' }}
						/>
					</div>
					<div className="card-title">web</div>
					<div className="card-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod
					</div>
				</div>
			</div>

			<div className="row">
				<div className="card">
					<div className="icon">
						<FontAwesomeIcon
							icon={faPen}
							style={{ width: '2em', height: '2em' }}
						/>
					</div>
					<div className="card-title">writing</div>
					<div className="card-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod
					</div>
				</div>
				<div className="card">
					<div className="icon">
						<FontAwesomeIcon
							icon={faUsers}
							style={{ width: '2em', height: '2em' }}
						/>
					</div>
					<div className="card-title">writing</div>
					<div className="card-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod
					</div>
				</div>
				<div className="card">
					<div className="icon">
						<FontAwesomeIcon
							icon={faCamera}
							style={{ width: '2em', height: '2em' }}
						/>
					</div>
					<div className="card-title">something else</div>
					<div className="card-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
