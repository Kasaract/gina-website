import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';
import NavBar from './share/NavBar';

function App() {
	return (
		<Router>
			<Routes />
		</Router>
	);
}

export default App;
