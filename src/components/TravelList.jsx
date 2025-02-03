import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard"; // Import the new component
import "../app.css"; // Ensure CSS styling is included

function TravelList() {
  const [plans, setPlans] = useState(travelPlansData);
  const [favorites, setFavorites] = useState([]);
  const [buttonColors, setButtonColors] = useState({}); // Track button colors per plan
  
  // List of colors to cycle through
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
  
  // Function to handle the deletion of a travel plan
  const handleDelete = (id) => {
    const updatedPlans = plans.filter((plan) => plan.id !== id);
    setPlans(updatedPlans); // Update the state with the filtered list
  };

  // Function to handle adding/removing a travel plan from favorites
  const handleFavorite = (id) => {
    // Check if the plan is already in the favorites list
    const plan = plans.find((plan) => plan.id === id);
    let updatedFavorites = [...favorites];
    let updatedButtonColors = { ...buttonColors };
    
    if (favorites.some((fav) => fav.id === id)) {
      // Remove from favorites
      updatedFavorites = updatedFavorites.filter((fav) => fav.id !== id);
    } else {
      // Add to favorites
      updatedFavorites.push(plan);
    }
    
    // Cycle the button color
    const currentColor = updatedButtonColors[id] || 0;
    updatedButtonColors[id] = (currentColor + 1) % colors.length;

    setFavorites(updatedFavorites);
    setButtonColors(updatedButtonColors);
  };

  return (
    <div className="travel-list-container">
      <div className="travel-list">
        {plans.map((plan) => (
          <TravelPlanCard
            key={plan.id}
            plan={plan}
            onDelete={handleDelete}
            onFavorite={handleFavorite}
            favoriteColor={buttonColors[plan.id] ? colors[buttonColors[plan.id]] : colors[0]} // Assign the color to the button
          />
        ))}
      </div>
      
      <div className="favorites-list">
        <h2>Favorites</h2>
        {favorites.map((plan) => (
          <TravelPlanCard
            key={plan.id}
            plan={plan}
            onDelete={handleDelete}
            onFavorite={handleFavorite}
            favoriteColor={buttonColors[plan.id] ? colors[buttonColors[plan.id]] : colors[0]} // Assign the color to the button
          />
        ))}
      </div>
    </div>
  );
}

export default TravelList;
