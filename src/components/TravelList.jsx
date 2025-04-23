import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
  const [plans, setPlans] = useState(travelPlansData);
  const [favorites, setFavorites] = useState([]);

  const handleDelete = (id) => {
    setPlans(plans.filter((plan) => plan.id !== id));
    setFavorites(favorites.filter((plan) => plan.id !== id));
  };

  const handleFavorite = (plan) => {
    if (!favorites.some((fav) => fav.id === plan.id)) {
      setFavorites([...favorites, plan]);
    }
  };

  return (
    <div className="travel-container">
      <div className="travel-list">
        <h2>All Travel Plans</h2>
        {plans.map((plan) => (
          <TravelPlanCard
            key={plan.id}
            plan={plan}
            onDelete={handleDelete}
            onFavorite={handleFavorite}
          />
        ))}
      </div>
      <div className="favorites-list">
        <h2>Favorites</h2>
        {favorites.length > 0 ? (
          favorites.map((plan) => (
            <TravelPlanCard
              key={plan.id}
              plan={plan}
              onDelete={handleDelete}
              onFavorite={handleFavorite}
              isFavorite
            />
          ))
        ) : (
          <p>No favorites yet</p>
        )}
      </div>
    </div>
  );
}

export default TravelList;
