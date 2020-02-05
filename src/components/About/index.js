import React from 'react';
import { Element } from 'react-scroll';

import './about.scss';
import white from './white.JPG';
import yellow from './yellow.JPG';

const About = () => {
	return (
		<Element name="about">
			<h2 className="text-center"> about </h2>
			{/* <div className="title"> about </div> */}
			<div className="col">
				<div className="row">
					<div className="col">
						<img src={yellow} className="rounded w-100" alt="yellow" />
					</div>
					<div className="col">
						<p>
							Lorem Ipsum has been the industry's standard dummy text ever since
							the 1500s, when an unknown printer took a galley of type and
							scrambled it to make a type specimen book. Lorem Ipsum has been
							the industry's standard dummy text ever since the 1500s, when an
							unknown printer took a galley of type and scrambled it to make a
							type specimen book. Lorem Ipsum has been the industry's standard
							dummy text ever since the 1500s, when an unknown printer took a
							galley of type and scrambled it to make a type specimen book.
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<p>
							Lorem Ipsum has been the industry's standard dummy text ever since
							the 1500s, when an unknown printer took a galley of type and
							scrambled it to make a type specimen book. Lorem Ipsum has been
							the industry's standard dummy text ever since the 1500s, when an
							unknown printer took a galley of type and scrambled it to make a
							type specimen book.
						</p>
					</div>
					<div className="col">
						<img src={white} className="rounded w-100" alt="white" />
					</div>
				</div>
			</div>
		</Element>
	);
};

export default About;
