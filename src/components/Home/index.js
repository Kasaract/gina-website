import React from 'react';

import HomeBackground from '../../assets/images/home.jpg';
import './home.scss';

const Home = () => {
	return (
		<div className="home-wrapper">
			<img src={HomeBackground} alt="home background" />
			<ul className="social-media">
				<li className="icon" />
				<li className="icon" />
				<li className="icon" />
				<li className="icon" />
			</ul>
		</div>
	);
};

export default Home;
