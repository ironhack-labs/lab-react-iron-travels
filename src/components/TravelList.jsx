import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);
  const [favorites, setFavorites] = useState([]);
  const [favoriteButtonColors, setFavoriteButtonColors] = useState({});

  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const handleDelete = (id) => {
    setTravelPlans(prevPlans => prevPlans.filter(plan => plan.id !== id));
    setFavorites(prevFavorites => prevFavorites.filter(fav => fav.id !== id));
  };

  const handleFavorite = (id) => {
    const plan = travelPlans.find(plan => plan.id === id);
    if (!plan) return;

    // Add or remove from favorites
    setFavorites((prevFavorites) => {
      if (prevFavorites.some(fav => fav.id === id)) {
        return prevFavorites.filter(fav => fav.id !== id); // Remove from favorites
      } else {
        return [...prevFavorites, plan]; // Add to favorites
      }
    });

    // Update the button color for this travel plan
    setFavoriteButtonColors((prevColors) => {
      const currentColorIndex = prevColors[id] || 0; // Get the current color index or 0 if undefined
      const nextColorIndex = (currentColorIndex + 1) % colors.length; // Cycle through colors
      return { ...prevColors, [id]: nextColorIndex }; // Update the color for this id
    });
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {/* Main Travel List */}
      <div>
        <h2>My Travel Plans</h2>
        <ul>
          {travelPlans.map((plan) => (
            <TravelPlanCard
              key={plan.id}
              plan={plan}
              handleDelete={handleDelete}
              handleFavorite={handleFavorite}
              favoriteButtonColor={colors[favoriteButtonColors[plan.id] || 0]} // Set color
            />
          ))}
        </ul>
      </div>

      {/* Favorites List */}
      <div>
        <h2>Favorites</h2>
        <ul>
          {favorites.map((plan) => (
            <li key={plan.id}>
              <strong>{plan.destination}</strong> - {plan.date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TravelList;
