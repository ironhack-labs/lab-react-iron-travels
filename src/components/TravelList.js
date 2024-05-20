// src/components/TravelList.js
import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);
  const [favorites, setFavorites] = useState([]);
  const [buttonColors, setButtonColors] = useState({});

  const handleDelete = (id) => {
    const updatedPlans = travelPlans.filter((plan) => plan.id !== id);
    setTravelPlans(updatedPlans);
    setFavorites(favorites.filter((plan) => plan.id !== id));
  };

  const handleFavorite = (plan) => {
    const isFavorite = favorites.some((fav) => fav.id === plan.id);
    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.id !== plan.id));
    } else {
      setFavorites([...favorites, plan]);
    }

    const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
    setButtonColors({
      ...buttonColors,
      [plan.id]: colors[Math.floor(Math.random() * colors.length)],
    });
  };

  return (
    <div>
      <h2>Travel Plans</h2>
      <ul>
        {travelPlans.map((plan) => (
          <TravelPlanCard
            key={plan.id}
            plan={plan}
            onDelete={handleDelete}
            onFavorite={handleFavorite}
            buttonColor={buttonColors[plan.id]}
          />
        ))}
      </ul>
      <h2>Favorites</h2>
      <ul>
        {favorites.map((plan) => (
          <TravelPlanCard
            key={plan.id}
            plan={plan}
            onDelete={handleDelete}
            onFavorite={handleFavorite}
            buttonColor={buttonColors[plan.id]}
          />
        ))}
      </ul>
    </div>
  );
}

export default TravelList;
