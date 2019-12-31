import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.scss';

const NavBar = () => {
	return (
		<div>
			<Link to="/">
				<div>GINA NGUYEN</div>
			</Link>
			<ul>
				<Link to="/about">
					<li>about</li>
				</Link>
				<Link to="/writing">
					<li>writing</li>
				</Link>
				<Link to="/photography">
					<li>photography</li>
				</Link>
				<Link to="/lawethics">
					<li>law {'&'} ethics</li>
				</Link>
				<Link to="/contact">
					<li>contact</li>
				</Link>
			</ul>
		</div>
	);
};

export default NavBar;
