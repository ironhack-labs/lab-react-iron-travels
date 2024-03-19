import logo from "./assets/logo.png";
import "./App.css";
import TravelList from "./components/TravelList/TravelList";
import Favorites from "./components/Favorites/Favorites";

import { useState } from "react";

import travelPlansData from "./assets/travel-plans.json";

function App() {
  const [travels, setTravels] = useState(travelPlansData);
  const [favorites, setFavorites] = useState([]);

  function removeTravel(id) {
    const filteredTravels = travels.filter((aTravel) => aTravel.id !== id);
    setTravels(filteredTravels);
  }

  function addToFavorite(id) {
    const result = travels.find((aFavorite) => {
      return aFavorite.id === id;
    });
    setFavorites([...favorites, result]);
  }

  return (
    <div className="App">
      <div className="left-container">
        <div>
          <img src={logo} className="logo" alt="App logo" />
        </div>
        <h1 className="text-iron">Iron Travels</h1>
        <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>

        {travels.map((travel) => {
          return (
            <TravelList
              key={travel.id}
              travel={travel}
              removeTravel={removeTravel}
              addToFavorite={addToFavorite}
            />
          );
        })}
      </div>

      <div className="right-container">
        <h3 className="text-iron">Favorites</h3>
        {favorites.map((favorite) => {
          return <Favorites key={favorite.id} favorite={favorite} />;
        })}
      </div>
    </div>
  );
}

export default App;
