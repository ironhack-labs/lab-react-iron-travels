import React, { useState } from "react";
import logo from "./assets/logo.png";
import TravelList from "./components/TravelList";
import Favorites from "./components/Favorite"
import "./App.css";

function App() {

  const [favorites, setFavorites] = useState([])

  const addToFavorites = (plan) => {
    if (!favorites.find((fav) => fav.destination === plan.destination)) {
      setFavorites([...favorites, plan]);
    }
  }
  const handleDelete = (id) => {
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>

      {/* RENDER YOUR LIST COMPONENT HERE */}
      <div className="app-container">
      <div className="travel-list-container">
        <TravelList addToFavorites={addToFavorites} /> 
        </div>
        <div className="favorites">
        <Favorites favorites={favorites} onDelete={handleDelete} />
      </div>
     </div>
    </>
  );
}

export default App;
