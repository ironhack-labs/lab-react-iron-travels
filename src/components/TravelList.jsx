import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);
  const [favorites, setFavorites] = useState([]);

  function handleDelete(id) {
    setTravelPlans(travelPlans.filter((plan) => plan.id !== id));
  }

  function handleFavorite(plan) {
    if (!favorites.some((favorite) => favorite.id === plan.id)) {
      setFavorites([...favorites, plan]);
    }
  }

  return (
    <div>
      {travelPlans.map((plan) => (
        <TravelPlanCard
          key={plan.id}
          plan={plan}
          onDelete={handleDelete}
          onFavorite={handleFavorite}
        />
      ))}

      <div className="favorites">
        <h2>Favorites</h2>

        {favorites.map((plan) => (
          <div className="favorite-card" key={plan.id}>
            <img src={plan.image} alt={plan.destination} />

            <div>
              <h3>{plan.destination}</h3>
              <p>{plan.days} days</p>
              <p>{plan.totalCost} €</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TravelList;