import logo from './assets/logo.png';
import './App.css';
import { useState } from 'react';

import TravelList from './components/TravelList';
import FavouritesList from './components/FavouritesList';

import travelPlansData from './assets/travel-plans.json';

function App() {
	const [list, setList] = useState(travelPlansData);

	return (
		<>
			<div>
				<img src={logo} className='logo' alt='App logo' />
			</div>
			<h1 className='text-iron'>Iron Travels</h1>
			<h3 className='text-iron'>Tailored Travel Plans for Ironhackers</h3>

			{/* RENDER YOUR LIST COMPONENT HERE */}
			<div id='listWrapper'>
				<TravelList stateTravelList={[list, setList]} />
				<FavouritesList favouritePlans={list} />
			</div>
		</>
	);
}

export default App;
