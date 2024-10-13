import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json"; // Importing the JSON data
import TravelPlanCard from "./TravelPlanCard";

const TravelList = () => {
  const [plans, setPlans] = useState(travelPlansData); // State for the main travel plans
  const [favorites, setFavorites] = useState([]); // State for favorites
  const [favoriteColors, setFavoriteColors] = useState({}); // State for favorite button colors

  // Array of colors for the favorite button
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  // Delete handler
  const handleDelete = (id) => {
    setPlans(plans.filter((plan) => plan.id !== id));
  };

  // Toggle favorite handler
  const handleFavorite = (plan) => {
    // Add or remove plan from favorites
    setFavorites((prevFavorites) =>
      prevFavorites.includes(plan)
        ? prevFavorites.filter((fav) => fav.id !== plan.id)
        : [...prevFavorites, plan]
    );

    // Change button color for the plan
    setFavoriteColors((prevColors) => ({
      ...prevColors,
      [plan.id]:
        colors[(colors.indexOf(prevColors[plan.id]) + 1) % colors.length] ||
        colors[0],
    }));
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {/* Main List */}
      <div>
        <h1>Travel Plans</h1>
        {plans.map((plan) => (
          <TravelPlanCard
            key={plan.id}
            plan={plan}
            onDelete={handleDelete}
            onFavorite={handleFavorite}
            favoriteColor={favoriteColors[plan.id]}
          />
        ))}
      </div>

      {/* Favorites List */}
      <div style={{ marginLeft: "20px", maxWidth: "200px" }}>
        <h1>Favorites</h1>
        {favorites.length > 0 ? (
          favorites.map((favorite) => (
            <div
              key={favorite.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <img
                src={favorite.image}
                alt={favorite.destination}
                style={{ width: "100%" }}
              />
              <h2>{favorite.destination}</h2>
              <p>Price: {favorite.totalCost} €</p>
            </div>
          ))
        ) : (
          <p>No favorites added yet.</p>
        )}
      </div>
    </div>
  );
};

export default TravelList;
