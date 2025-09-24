import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);
  const [favorites, setFavorites] = useState([]);

  const favoriteColors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const handleDelete = (id) => {
    setTravelPlans(travelPlans.filter((plan) => plan.id !== id));
    setFavorites(favorites.filter((plan) => plan.id !== id));
  };

  const handleFavorite = (plan) => {
    setFavorites((prev) => {
      if (!prev.find((fav) => fav.id === plan.id)) {
        return [...prev, { ...plan, colorIndex: 0 }];
      }
      return prev;
    });
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <h2>Travel Plans</h2>
        <ul>
          {travelPlans.map((plan) => (
            <TravelPlanCard
              key={plan.id}
              plan={plan}
              onDelete={handleDelete}
              onFavorite={handleFavorite}
              favoriteColors={favoriteColors}
            />
          ))}
        </ul>
      </div>

      <div>
        <h2>Favorites</h2>
        <ul>
          {favorites.map((plan) => (
            <li key={plan.id}>
              {plan.destination} ({plan.days} days) - {plan.totalCost}$
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TravelList;
