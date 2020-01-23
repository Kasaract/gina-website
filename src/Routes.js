import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './components/Main';
import LawEthics from './components/PortfolioPages/LawEthics';
import Leadership from './components/PortfolioPages/Leadership';
import LiteraryContent from './components/PortfolioPages/LiteraryContent';
import Photography from './components/PortfolioPages/Photography';
import SportsJournalism from './components/PortfolioPages/SportsJournalism';
import Web from './components/PortfolioPages/Web';
import Writing from './components/PortfolioPages/Writing';
import Error404 from './components/Error404';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/gina-website/" component={Main} />
			<Route exact path="/" component={Main} />

			<Route exact path="/portfolio/lawethics" component={LawEthics} />
			<Route exact path="/portfolio/leadership" component={Leadership} />
			<Route exact path="/portfolio/literarycontent" component={LiteraryContent} />
			<Route exact path="/portfolio/photography" component={Photography} />
			<Route exact path="/portfolio/sportsjournalism" component={SportsJournalism} />
			<Route exact path="/portfolio/web" component={Web} />
			<Route exact path="/portfolio/writing" component={Writing} />

			<Route path="*" component={Error404} />
		</Switch>
	);
};

export default Routes;
