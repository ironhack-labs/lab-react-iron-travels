import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelCard";
import Favorite from "./Favorites";

function TravelList() {
  const [plans, setPlans] = useState(travelPlansData);
  const [favorites, setFavorites] = useState([]);

  const handleDelete = (id) => {
    setPlans((prev) => prev.filter((plan) => plan.id !== id));
    setFavorites((prev) => prev.filter((fav) => fav.id !== id));
  };

  const handleFavorite = (plan) => {
    setFavorites((prev) => {
      const alreadyFav = prev.find((fav) => fav.id === plan.id);
      if (alreadyFav) return prev;
      return [...prev, plan];
    });
  };

  const handleRemoveFavorite = (id) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== id));
  };

  return (
    <div className="main-layout">
      <div className="list-section">
        <h2>Travel Plans</h2>
        {plans.map((plan) => (
          <TravelPlanCard
            key={plan.id}
            plan={plan}
            onDelete={handleDelete}
            onFavorite={handleFavorite}
          />
        ))}
      </div>

      <Favorite favorites={favorites} onRemove={handleRemoveFavorite} />
    </div>
  );
}

export default TravelList;