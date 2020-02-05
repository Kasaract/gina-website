import React from 'react';
import { Element } from 'react-scroll';

import './contact.scss';
import Facebook from './images/facebook.svg';
import Instagram from './images/instagram2.svg';
import LinkedIn from './images/linkedin2.svg';
import Twitter from './images/twitter.svg';

const Contact = () => {
	return (
		<Element name="contact">
			<div style={{ height: '100vh', width: '100vw' }}>
				<h1 className="text-center">Feel free to reach out!</h1>
				<div className="row">
					<div className="col" />
					<div className="col-4">
						<div className="d-flex justify-content-center">
							<img
								src={Facebook}
								className=""
								style={{ maxHeight: '2.5rem' }}
								alt="social-media-icon"
							/>
							<img
								src={Instagram}
								className=""
								style={{ maxHeight: '2.5rem' }}
								alt="social-media-icon"
							/>
							<img
								src={LinkedIn}
								className=""
								style={{ maxHeight: '2.5rem' }}
								alt="social-media-icon"
							/>
							<img
								src={Twitter}
								className=""
								style={{ maxHeight: '2.5rem' }}
								alt="social-media-icon"
							/>
						</div>
					</div>

					<div className="col" />
				</div>
			</div>
		</Element>
	);
};

export default Contact;
