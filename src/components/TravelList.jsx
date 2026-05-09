import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
  const [plans, setPlans] = useState(travelPlansData);
  const [favorites, setFavorites] = useState([]);

  function handleDelete(planId) {
    const updatedPlans = plans.filter(function (plan) {
      return plan.id !== planId;
    });
    setPlans(updatedPlans);
  }

  function handleFavorite(planToAdd) {
    const alreadyFavorited = favorites.find(function (fav) {
      return fav.id === planToAdd.id;
    });
    if (!alreadyFavorited) {
      setFavorites([...favorites, planToAdd]);
    }
  }

  return (
    <div className="travel-layout">
      <div className="plans-column">
        {plans.map(function (plan) {
          return (
            <TravelPlanCard
              key={plan.id}
              plan={plan}
              onDelete={handleDelete}
              onFavorite={handleFavorite}
            />
          );
        })}
      </div>

      <div className="favorites-column">
        <h2 className="favorites-heading">Favorites</h2>
        {favorites.length === 0 ? (
          <p className="favorites-empty">No favorites yet. Click ♡ to add!</p>
        ) : (
          favorites.map(function (plan) {
            return (
              <TravelPlanCard
                key={plan.id}
                plan={plan}
                onDelete={handleDelete}
                compact={true}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default TravelList;