// src/App.jsx

import React, { useState } from 'react';
import logo from './assets/logo.png';
import './App.css';
import TravelList from './components/TravelList';
import FavoritesList from './components/FavoritesList';
import travelPlansData from './assets/travel-plans.json';

function App() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);
  const [favorites, setFavorites] = useState([]);

  const handleDeleteFromTravelPlans = (id) => {
    const updatedPlans = travelPlans.filter(plan => plan.id !== id);
    setTravelPlans(updatedPlans);
  };

  const handleAddToFavorites = (plan) => {
    if (!favorites.find(fav => fav.id === plan.id)) {
      setFavorites([...favorites, plan]);
    }
  };

  const handleDeleteFromFavorites = (id) => {
    const updatedFavorites = favorites.filter(fav => fav.id !== id);
    setFavorites(updatedFavorites);
  };

  return (
    <div className="container">
      <div className="header">
        <div>
          <img src={logo} className="logo" alt="App logo" />
        </div>
        <div>
          <h1 className="text-iron">Iron Travels</h1>
          <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>
        </div>
      </div>
      
      <div className="lists-container">
        <div className="list-wrapper">
          <TravelList
            travelPlans={travelPlans}
            onDelete={handleDeleteFromTravelPlans}
            onFavorite={handleAddToFavorites}
          />
        </div>
        <div className="list-wrapper">
          <FavoritesList
            favorites={favorites}
            onDelete={handleDeleteFromFavorites}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
