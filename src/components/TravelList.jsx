import { useState } from "react";
import TravelPlanCard from "./TravelPlanCard";
import travelPlansData from "../assets/travel-plans.json";

export default function TravelList() {
  const [plansArray, setPlansArray] = useState(travelPlansData);
  const [favorites, setFavorites] = useState([]);

  const removePlan = (id) => {
    setPlansArray((current) =>
      current.filter((plan) => {
        return plan.id !== id;
      })
    );
  };

  const addToFavorites = (id) => {
    const favorite = plansArray.find((plan) => plan.id === id);

    if (!favorites.includes(favorite)) {
      setFavorites([...favorites, favorite]);
    }
  };

  return (
    <div className="MainDiv">
      <div className="List">
        {plansArray.map((plan, index) => (
          <TravelPlanCard
            plan={plan}
            key={index}
            removeElement={() => removePlan(plan.id)}
            addToFavorites={() => addToFavorites(plan.id)}
          />
        ))}
      </div>
      <div className="Favorites">
        {favorites.map((favorite, index) => (
          <TravelPlanCard plan={favorite} key={index} isFavorite />
        ))}
      </div>
    </div>
  );
}
