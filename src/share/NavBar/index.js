import React from 'react';
import { Link } from 'react-scroll';

import './navbar.scss';

const NavBar = () => {
	return (
		<div className="navbar-wrapper">
			<div className="name">GINA NGUYEN</div>
			<ul className="tab-list">
				<li className="tab">
					<Link activeClass="active" to="home" spy={true} smooth={true} duration={500} >
						home
					</Link>
				</li>
				<li className="tab">
					<Link activeClass="active" to="about" spy={true} smooth={true} duration={500} >
						about
					</Link>
				</li>
				<li className="tab">
					<Link activeClass="active" to="portfolio" spy={true} smooth={true} duration={500} >
						portfolio
					</Link>
				</li>
				<li className="tab" id="last-tab">
					<Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} >
						contact
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
