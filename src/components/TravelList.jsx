import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);
  const [favorites, setFavorites] = useState([]);

  const handleDelete = (id) => {
    setTravelPlans(travelPlans.filter(plan => plan.id !== id));
    setFavorites(favorites.filter(plan => plan.id !== id));
  };

  const handleFavorite = (plan) => {
    if (!favorites.find(fav => fav.id === plan.id)) {
      setFavorites([...favorites, plan]);
    }
  };

  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <div>
        <h1>Iron Travels ✈️</h1>
        {travelPlans.map(plan => (
          <TravelPlanCard
            key={plan.id}
            plan={plan}
            onDelete={handleDelete}
            onFavorite={handleFavorite}
          />
        ))}
      </div>

      <div>
        <h2>Favorites 💖</h2>
        {favorites.map(plan => (
          <TravelPlanCard
            key={plan.id}
            plan={plan}
            onDelete={handleDelete}
            isFavorite
          />
        ))}
      </div>
    </div>
  );
}

export default TravelList;