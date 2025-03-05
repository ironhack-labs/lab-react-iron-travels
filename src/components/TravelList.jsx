import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

const TravelList = () => {
  const [travelList, setTravelList] = useState(travelPlansData);
  const [favorites, setFavorites] = useState([]);


  const removePlan = (id) => {
    setTravelList(travelList.filter((plan) => plan.id !== id));
    setFavorites(favorites.filter((plan) => plan.id !== id)); 
  const toggleFavorite = (plan) => {
    if (favorites.some((fav) => fav.id === plan.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== plan.id));
    } else {
      setFavorites([...favorites, plan]);
    }
  };
}

  return (
    <div className="travel-container">
      <div>
        <h2>Travel Plans</h2>
        {travelList.length === 0 ? (
          <p>No travel plans available.</p>
        ) : (
          <ul>
            {travelList.map((plan) => (
              <TravelPlanCard
                key={plan.id}
                plan={plan}
                onDelete={removePlan}
                onFavorite={toggleFavorite}
                isFavorite={favorites.some((fav) => fav.id === plan.id)}
              />
            ))}
          </ul>
        )}
      </div>
      <div>
        <h2>Favorites</h2>
        {favorites.length === 0 ? (
          <p>No favorites yet.</p>
        ) : (
          <ul>
            {favorites.map((plan) => (
              <TravelPlanCard
                key={plan.id}
                plan={plan}
                onDelete={removePlan}
                onFavorite={toggleFavorite}
                isFavorite={true}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TravelList;
