import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
  const [plans, setPlans] = useState(travelPlansData);
  const [favorites, setFavorites] = useState([]);

  const handleDelete = (id) => {
    setPlans(plans.filter((plan) => plan.id !== id));
  };

  const handleFavorite = (plan) => {
    // Only add if not already in favorites
    if (!favorites.find((fav) => fav.id === plan.id)) {
      setFavorites([...favorites, plan]);
    }
  };

  return (
    <div className="travel-layout">
      {/* Main list */}
      <div className="travel-section">
        <h2 className="section-title">All Travel Plans</h2>
        <div className="travel-list">
          {plans.map((plan) => (
            <TravelPlanCard
              key={plan.id}
              plan={plan}
              onDelete={handleDelete}
              onFavorite={handleFavorite}
            />
          ))}
        </div>
      </div>

      {/* Favorites list */}
      <div className="travel-section">
        <h2 className="section-title">❤️ Favorites</h2>
        <div className="travel-list">
          {favorites.length === 0 && (
            <p className="empty-msg">No favorites yet. Click ♡ to add one!</p>
          )}
          {favorites.map((plan) => (
            <TravelPlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TravelList;