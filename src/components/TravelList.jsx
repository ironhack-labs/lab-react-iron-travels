// src/components/TravelList.jsx
import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelCard from "./TravelCard";
import "./TravelList.css";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);
  const [favorites, setFavorites] = useState([]);

  const deleteItem = (id) => {
    setTravelPlans(travelPlans.filter((item) => item.id !== id));
    setFavorites(favorites.filter((item) => item.id !== id));
  };

  const toggleFavorite = (item) => {
    if (favorites.some((fav) => fav.id === item.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== item.id));
    } else {
      setFavorites([...favorites, item]);
    }
  };

  return (
    <div className="container">
      <div className="travel-list">
        {travelPlans.map((item) => (
          <TravelCard
            key={item.id}
            item={item}
            deleteFunc={deleteItem}
            toggleFavorite={toggleFavorite}
            isFavorite={favorites.some((fav) => fav.id === item.id)}
          />
        ))}
      </div>
      <div className="favorites-list">
        <h2>Favorites</h2>
        {favorites.map((item) => (
          <TravelCard
            key={item.id}
            item={item}
            deleteFunc={deleteItem}
            toggleFavorite={toggleFavorite}
            isFavorite={true}
          />
        ))}
      </div>
    </div>
  );
}

export default TravelList;
