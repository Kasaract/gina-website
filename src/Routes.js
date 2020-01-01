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
			<Route exact path="/gina-website/" component={Home} />
			<Route exact path="/" component={Home} />
			<Route exact path="/about" component={About} />
			<Route exact path="/writing" component={Writing} />
			<Route exact path="/photography" component={Photography} />
			<Route exact path="/lawethics" component={LawEthics} />
			<Route exact path="/contact" component={Contact} />
			<Route path="*" component={Error404} />
		</Switch>
	);
};

export default Routes;
