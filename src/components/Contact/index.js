import React from 'react';

import './contact.scss';
import Facebook from './images/facebook.svg';
import Instagram from './images/instagram2.svg';
import LinkedIn from './images/linkedin2.svg';
import Twitter from './images/twitter.svg';

const Contact = () => {
	return (
		<div className="contact-wrapper">
			<div className="heading">Feel free to reach out!</div>
			<ul className="social-media-list">
				<li className="icon-wrapper">
					<img src={Facebook} className="icon" alt="social-media-icon" />
				</li>
				<li className="icon-wrapper">
					<img src={Instagram} className="icon" alt="social-media-icon" />
				</li>
				<li className="icon-wrapper">
					<img src={LinkedIn} className="icon" alt="social-media-icon" />
				</li>
				<li className="icon-wrapper">
					<img src={Twitter} className="icon" alt="social-media-icon" />
				</li>
			</ul>
		</div>
	);
};

export default Contact;
