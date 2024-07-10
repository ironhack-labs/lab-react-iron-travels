import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);
  const [favorites, setFavorites] = useState([]);

  const handleDelete = (id) => {
    const updatedTravelPlans = travelPlans.filter((plan) => plan.id !== id);
    setTravelPlans(updatedTravelPlans);

    const updatedFavorites = favorites.filter((plan) => plan.id !== id);
    setFavorites(updatedFavorites);
  };

  const handleFavorite = (id) => {
    const findFavorite = favorites.find((plan) => plan.id === id);
    console.log(findFavorite)

    const newFavorites = findFavorite
      ? favorites.filter((plan) => plan.id !== id)
      : [...favorites, travelPlans.find((plan) => plan.id === id)];
    setFavorites(newFavorites);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <h1>Travel List</h1>
        <ul>
          {travelPlans.map((travelPlan) => (
            <TravelPlanCard
              key={travelPlan.id}
              plan={travelPlan}
              handleDelete={handleDelete}
              handleFavorite={handleFavorite}
            />
          ))}
        </ul>
      </div>
      <div>
        <h1>Favorites</h1>
        <ul>
          {favorites.map((favorite) => (
            <li key={favorite.id}>{favorite.destination}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TravelList;
