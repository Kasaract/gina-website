import React from 'react';
import { Element } from 'react-scroll'

// import HomeBackground from '../../assets/images/home.jpg';
import './home.scss';

const Home = () => {
	return (
		<Element name="home">
			<div className="home-wrapper">
				<img
					src="https://gina-website.s3.amazonaws.com/home.jpg"
					alt="home background"
				/>
				<ul className="social-media">
					<li className="icon" />
					<li className="icon" />
					<li className="icon" />
					<li className="icon" />
				</ul>
			</div>
		</Element>
	);
};

export default Home;
