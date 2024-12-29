import {useState} from 'react';
import Menu from './components/menu/menu';
import Header from './components/middle/header/header';
import MiddleSection from './components/middle/hero-section/hersect';
import Weeklysong from './components/middle/weeklyTopsong/topSong';

const App = () => {
	document.body.style = "background-color: #181818;";
	
	return (
		<>
		<div className='container'>
		<Menu />
		<Header />
		<MiddleSection />
		</div>
		</>
	)
}

export default App