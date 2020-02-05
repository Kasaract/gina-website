import React from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {
	return (
		<div class="w-100 d-flex justify-content-end align-items-center p-3 px-md-4 position-absolute">
			<nav class="my-2 my-md-0 mr-md-3">
				<Link to="home" spy={true} smooth={true} duration={750}>
					<a class="p-3 text-white" href="#" style={{ fontSize: '1.2rem' }}>
						Home
					</a>
				</Link>
				<Link to="about" spy={true} smooth={true} duration={750}>
					<a class="p-3 text-white" href="#" style={{ fontSize: '1.2rem' }}>
						About
					</a>
				</Link>
				<Link to="portfolio" spy={true} smooth={true} duration={750}>
					<a class="p-3 text-white" href="#" style={{ fontSize: '1.2rem' }}>
						Portfolio
					</a>
				</Link>
				{/* <a class="p-3 text-white" href="#">Design</a>
			<a class="p-3 text-white" href="#">Photography</a> */}
				<Link to="contact" spy={true} smooth={true} duration={750}>
					<a class="p-3 text-white" href="#" style={{ fontSize: '1.2rem' }}>
						Contact
					</a>
				</Link>
			</nav>
		</div>
	);
};

export default NavBar;
