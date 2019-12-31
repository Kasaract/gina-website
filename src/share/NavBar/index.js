import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.scss';

const NavBar = () => {
	return (
		<div className="navbar-wrapper">
			<Link to="/">
				<div className="name">GINA NGUYEN</div>
			</Link>
			<ul className="tab-list">
				<li className="tab">
					<Link to="/about">about</Link>
				</li>
				<li className="tab">
					<Link to="/writing">writing</Link>
				</li>
				<li className="tab">
					<Link to="/photography">photography</Link>
				</li>
				<li className="tab">
					<Link to="/lawethics">law {'&'} ethics</Link>
				</li>
				<li className="tab" id="last-tab">
					<Link to="/contact">contact</Link>
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
