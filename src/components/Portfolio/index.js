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

// import './portfolio.scss';

const Portfolio = () => {
	return (
		<Element name="portfolio">
			<h2 className="text-center"> portfolio </h2>
			<div className="row">
				<div className="col">
					<Link to="/portfolio/lawethics" style={{ color: 'black' }}>
						<div className="card">
							<div className="card-img-top d-flex justify-content-center">
								<FontAwesomeIcon
									icon={faGavel}
									style={{ width: '2em', height: '2em' }}
								/>
							</div>
							<div className="card-body">
								<h4 className="card-title text-center">law & ethics</h4>
								<p className="card-text text-center">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod
								</p>
							</div>
						</div>
					</Link>
				</div>

				<div className="col">
					<Link to="/portfolio/lawethics" style={{ color: 'black' }}>
						<div className="card">
							<div className="card-img-top d-flex justify-content-center">
								<FontAwesomeIcon
									icon={faGavel}
									style={{ width: '2em', height: '2em' }}
								/>
							</div>
							<div className="card-body">
								<h4 className="card-title text-center">law & ethics</h4>
								<p className="card-text text-center">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod
								</p>
							</div>
						</div>
					</Link>
				</div>

				<div className="col">
					<Link to="/portfolio/lawethics" style={{ color: 'black' }}>
						<div className="card">
							<div className="card-img-top d-flex justify-content-center">
								<FontAwesomeIcon
									icon={faGavel}
									style={{ width: '2em', height: '2em' }}
								/>
							</div>
							<div className="card-body">
								<h4 className="card-title text-center">law & ethics</h4>
								<p className="card-text text-center">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod
								</p>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</Element>
	);
};

export default Portfolio;

{
	/* <Link to="/portfolio/lawethics">
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
					</Link> */
}
