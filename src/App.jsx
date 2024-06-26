import logo from "./assets/logo.png";
import "./App.css";
import TravelList from "./components/TravelList";
import Favorites from "./components/Favorites";

import { useState } from "react";
import travelPlansData from "./assets/travel-plans.json"

function App() {

  // manage state of TravelList
  const [travelPlans, setTravelPlans] = useState(travelPlansData);
  // manage state of Favorites
  const [favorites, setFavorites] = useState([]);

  // functions to handle click events, to be passed down to Card components
  const handleFavorites = (id) => {
    const favoriteItem = travelPlans.find(item => item.id === id);
    favorites.unshift(favoriteItem);
    setFavorites(favorites);
    setTravelPlans(travelPlans.filter(item => item.id !== id));
  }

  const handleDelete = (id) => {
    setTravelPlans(travelPlans.filter(item => item.id !== id));
  }

  return (
    <>
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>
      <section className="window">
        <TravelList list={travelPlans} deleteFunc={handleDelete} favoriteFunc={handleFavorites}/>
        <Favorites favoriteItems={favorites}/>
      </section> 
    </>
  );
}

export default App;
