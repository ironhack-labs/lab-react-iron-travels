import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./travel-plan-card";

const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

function TravelList() {
  const [plans, setPlans] = useState(travelPlansData);
  const [favorites, setFavorites] = useState([]);
  const [favColors, setFavColors] = useState({}); 

  const handleDelete = (planId) => {
    setPlans(plans.filter((plan) => plan.id !== planId));
    setFavorites(favorites.filter((plan) => plan.id !== planId));
  };

  const handleFavorite = (plan) => {
    const isInFavorites = favorites.some((fav) => fav.id === plan.id);
    if (!isInFavorites) {
      setFavorites([...favorites, plan]);
    }

    setFavColors((prevColors) => {
      const currentIndex = prevColors[plan.id] ?? 0;
      const nextIndex = (currentIndex + 1) % colors.length;
      return {
        ...prevColors,
        [plan.id]: nextIndex
      };
    });
  };

  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <div>
        <h2>Travel Plans</h2>
        <ul>
          {plans.map((plan) => (
            <TravelPlanCard
              key={plan.id}
              plan={plan}
              onDelete={handleDelete}
              onFavorite={handleFavorite}
              color={colors[favColors[plan.id] ?? 0]}
            />
          ))}
        </ul>
      </div>

      <div>
        <h2>Favorites</h2>
        {favorites.length === 0 && <p>No favorites yet.</p>}
        <ul>
          {favorites.map((favPlan) => (
            <li key={favPlan.id}>{favPlan.destination}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TravelList;