import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./travel-plan-card";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);
  const [favorites, setFavorites] = useState([]);
  
  const handleDelete = (id) => {
    setTravelPlans(travelPlans.filter((plan) => plan.id !== id));
    setFavorites(favorites.filter((plan) => plan.id !== id));
  };

  const handleFavorite = (plan) => {
    if (favorites.some((fav) => fav.id === plan.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== plan.id));
    } else {
      setFavorites([...favorites, plan]);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <h2>Iron Travels</h2>
        {travelPlans.map((plan) => (
          <TravelPlanCard
            key={plan.id}
            plan={plan}
            onDelete={handleDelete}
            onFavorite={handleFavorite}
          />
        ))}
      </div>

      <div>
        <h2>Favorites</h2>
        {favorites.length === 0 ? <p>No favorites yet</p> : 
          favorites.map((plan) => (
            <TravelPlanCard
              key={plan.id}
              plan={plan}
              onDelete={handleDelete}
              onFavorite={handleFavorite}
            />
          ))}
      </div>
    </div>
  );
}

export default TravelList;
