import React from 'react';

import './about.scss';
import white from './white.JPG';
import yellow from './yellow.JPG';

const About = () => {
	return (
		<div className="about-wrapper">
			<div className="section-title">
				<div className="title"> about </div>
			</div>
			<div className="row">
				<div className="image-wrapper">
					<img src={yellow} className="img" alt="yellow" />
				</div>
				<div className="text-wrapper">
					<div className="text">
						Lorem Ipsum has been the industry's standard dummy text ever since
						the 1500s, when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s, when an unknown
						printer took a galley of type and scrambled it to make a type
						specimen book. Lorem Ipsum has been the industry's standard dummy
						text ever since the 1500s, when an unknown printer took a galley of
						type and scrambled it to make a type specimen book.
					</div>
				</div>
			</div>
			<div className="row">
				<div className="text-wrapper">
					<div className="text">
						Lorem Ipsum has been the industry's standard dummy text ever since
						the 1500s, when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s, when an unknown
						printer took a galley of type and scrambled it to make a type
						specimen book.
					</div>
					<div className="text">
						Lorem Ipsum has been the industry's standard dummy text ever since
						the 1500s, when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s, when an unknown
						printer took a galley of type and scrambled it to make a type
						specimen book.
					</div>
				</div>
				<div className="image-wrapper">
					<img src={white} className="img" alt="white" />
				</div>
			</div>
		</div>
	);
};

export default About;
