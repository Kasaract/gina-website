import React from 'react';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
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
		<Element name="portfolio">
			<div className="portfolio-wrapper">
				<div className="section-title">
					<div className="title"> portfolio </div>
				</div>
				<div className="row">
					<Link to="/portfolio/lawethics">
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
					</Link>

					<Link to="/portfolio/leadership">
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
					</Link>

					<Link to="/portfolio/literarycontent">
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
					</Link>
				</div>

				<div className="row">
					<Link to="/portfolio/photography">
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
					</Link>

					<Link to="/portfolio/sportsjournalism">
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
					</Link>

					<Link to="/portfolio/web">
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
					</Link>
				</div>

				<div className="row">
					<Link to="/portfolio/writing">
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
					</Link>

					<Link to="/portfolio/writing">
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
					</Link>

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
		</Element>
	);
};

export default Portfolio;
