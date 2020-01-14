import React from 'react';

import './navbar.scss';

const NavBar = () => {
	return (
		<div className="navbar-wrapper">
			<div className="name">GINA NGUYEN</div>
			<ul className="tab-list">
				<li className="tab">
					home
				</li>
				<li className="tab">
					about
				</li>
				<li className="tab">
					portfolio
				</li>
				<li className="tab" id="last-tab">
					contact
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
