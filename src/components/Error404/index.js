import React from 'react';
import { Link } from 'react-router-dom';

import './error404.scss';

const Error404 = () => {
	return (
		<div className="error-wrapper">
			<div className="heading">Oops, Page not found!</div>
			<div className="subheading">
				Click <Link to="/">here</Link> to go back home
			</div>
		</div>
	);
};

export default Error404;
