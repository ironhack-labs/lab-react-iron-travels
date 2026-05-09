import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

const COLORS = ["purple", "blue", "green", "yellow", "orange", "red"];

function TravelList() {
  const [plans, setPlans] = useState(travelPlansData);
  const [favorites, setFavorites] = useState([]);
  const [colorIndexes, setColorIndexes] = useState({});

  function handleDelete(id) {
    const updatedPlans = plans.filter(function (plan) {
      return plan.id !== id;
    });
    setPlans(updatedPlans);
  }

  function handleFavorite(plan) {
    const currentIndex = colorIndexes[plan.id] !== undefined ? colorIndexes[plan.id] : -1;
    const nextIndex = (currentIndex + 1) % COLORS.length;
    setColorIndexes({ ...colorIndexes, [plan.id]: nextIndex });

    const alreadyFavorited = favorites.find(function (fav) {
      return fav.id === plan.id;
    });
    if (!alreadyFavorited) {
      setFavorites([...favorites, plan]);
    }
  }

  return (
    <div style={{ display: "flex", gap: "32px" }}>
      <div style={{ flex: 1 }}>
        <h2>Travel Plans</h2>
        {plans.map(function (plan) {
          return (
            <TravelPlanCard
              key={plan.id}
              plan={plan}
              onDelete={handleDelete}
              onFavorite={handleFavorite}
              favoriteColor={colorIndexes[plan.id] !== undefined ? COLORS[colorIndexes[plan.id]] : "gray"}
            />
          );
        })}
      </div>

      <div style={{ flex: 1 }}>
        <h2>Favorites</h2>
        {favorites.map(function (plan) {
          return (
            <div key={plan.id} style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "12px", marginBottom: "12px", display: "flex", gap: "12px" }}>
              <img src={plan.image} alt={plan.destination} style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "8px" }} />
              <div>
                <h3>{plan.destination}</h3>
                <p>${plan.totalCost}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TravelList;
