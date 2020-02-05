import React from 'react';
import { Element } from 'react-scroll';

// import HomeBackground from '../../assets/images/home.jpg';
import './home.scss';

const Home = () => {
	return (
		<Element name="home">
			<div className="" style={{ height: '100vh', overflow: 'hidden' }}>
				{/* <img
					src="https://gina-website.s3.amazonaws.com/home.jpg"
					alt="home background"
				/> */}

				<div
					className="position-absolute background w-100"
					style={{ zIndex: '-1' }}
				>
					<div className="layer" />
				</div>
				{/* <ul className="social-media">
					<li className="icon" />
					<li className="icon" />
					<li className="icon" />
					<li className="icon" />
				</ul> */}

				<div
					className="d-flex flex-column justify-content-center"
					style={{ height: '75vh' }}
				>
					<h1
						className="text-white text-center mt-4"
						style={{ fontSize: '5.75rem', letterSpacing: '0.5rem' }}
					>
						Gina Nguyen
					</h1>
					<p
						className="text-white text-center my-4"
						style={{ fontSize: '1.5rem' }}
					>
						Journalist · Photographer · Writer
					</p>
				</div>
			</div>
		</Element>
	);
};

export default Home;
