import React from 'react';

import NavBar from '../../share/NavBar';
import Home from '../../components/Home';
import About from '../../components/About';
import Portfolio from '../../components/Portfolio';
import Contact from '../../components/Contact';

const Main = () => (
  <div className="main-wrapper">
    <NavBar />
    <Home />
    <About />
    <Portfolio />
    <Contact />
  </div>
)

export default Main;