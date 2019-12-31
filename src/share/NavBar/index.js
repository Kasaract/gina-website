import React from 'react';

import './navbar.scss';

const NavBar = () => {
	return (
		<div>
			<div>GINA NGUYEN</div>
			<ul>
				<li>about</li>
				<li>writing</li>
				<li>photography</li>
				<li>law {'&'} ethics</li>
				<li>contact</li>
			</ul>
		</div>
	);
};

export default NavBar;
