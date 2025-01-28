import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

const TravelList = () => {
    const [travelPlans, setTravelPlans] = useState(travelPlansData);
    const [favorites, setFavorites] = useState([]);
  
    const handleDelete = (id) => {
      setTravelPlans(travelPlans.filter((plan) => plan.id !== id));
    };
  
    const handleFavorite = (plan) => {
      if (favorites.includes(plan)) {
        setFavorites(favorites.filter((fav) => fav.id !== plan.id));
      } else {
        setFavorites([...favorites, plan]);
      }
    };
  
    return (
      <div style={{ display: "flex", gap: "20px" }}>
        <ul>
          <h2>All Plans</h2>
          {travelPlans.map((plan) => (
            <TravelPlanCard
              key={plan.id}
              plan={plan}
              onDelete={handleDelete}
              onFavorite={handleFavorite}
            />
          ))}
        </ul>
        <ul>
          <h2>Favorites</h2>
          {favorites.map((plan) => (
            <TravelPlanCard
              key={plan.id}
              plan={plan}
              onDelete={handleDelete}
              onFavorite={handleFavorite}
            />
          ))}
        </ul>
      </div>
    );
  };
  
  export default TravelList;
  

  
  