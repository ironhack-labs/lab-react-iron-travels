import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);
  const [favorites, setFavorites] = useState([]);

  const handleDelete = (id) => {
    setTravelPlans(travelPlans.filter((plan) => plan.id !== id));
    setFavorites(favorites.filter((plan) => plan.id !== id));
  };

  const handleFavorite = (plan) => {
    const alreadyInFavorites = favorites.some((fav) => fav.id === plan.id);
    if (!alreadyInFavorites) {
      setFavorites([...favorites, plan]);
    }
  };

  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <div style={{ width: "60%" }}>
        <h2>All Travel Plans</h2>
        {travelPlans.map((plan) => (
          <TravelPlanCard
            key={plan.id}
            plan={plan}
            onDelete={handleDelete}
            onFavorite={handleFavorite}
          />
        ))}
      </div>

      <div style={{ width: "35%" }}>
        <h2>Favorites 💖</h2>
        {favorites.map((plan) => (
          <TravelPlanCard
            key={plan.id}
            plan={plan}
            onDelete={handleDelete}
            isFavorite={true}
          />
        ))}
      </div>
    </div>
  );
}

export default TravelList;
