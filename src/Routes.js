import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Writing from './components/Writing';
import Photography from './components/Photography';
import LawEthics from './components/LawEthics';
import Contact from './components/Contact';
import Error404 from './components/Error404';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/writing" component={Writing} />
			<Route path="/photography" component={Photography} />
			<Route path="/lawethics" component={LawEthics} />
			<Route path="/contact" component={Contact} />
			<Route path="*" component={Error404} />
		</Switch>
	);
};

export default Routes;
