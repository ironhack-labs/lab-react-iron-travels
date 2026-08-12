import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
  const [plans, setPlans] = useState(travelPlansData);
  const [favorites, setFavorites] = useState([]);

  const handleDelete = (id) => {
    setPlans(plans.filter((plan) => plan.id !== id));
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };

  const handleFavorite = (plan) => {
    if (!favorites.some((fav) => fav.id === plan.id)) {
      setFavorites([...favorites, plan]);
    }
  };

  return (
    <div className="travel-container">
      
      {/* LEFT SIDE — MAIN LIST */}
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

      {/* RIGHT SIDE — FAVORITES */}
      <div className="favorites-list">
        <h2>Favorites</h2>

        {favorites.length === 0 && <p>No favorites yet.</p>}

        {favorites.map((fav) => (
          <div key={fav.id} className="favorite-card">
            <h4>{fav.destination}</h4>
            <p>{fav.totalCost} Euro</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default TravelList;
