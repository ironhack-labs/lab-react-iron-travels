import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
  const [plans, setPlans] = useState(travelPlansData);
  const [favorites, setFavorites] = useState([]);

  function deletePlan(id) {
    const newPlans = plans.filter((plan) => plan.id !== id);
    setPlans(newPlans);
  }

  function addFavorite(plan) {
    // dont add the same plan twice
    const alreadyFavorite = favorites.find((fav) => fav.id === plan.id);
    if (!alreadyFavorite) {
      setFavorites([...favorites, plan]);
    }
  }

  return (
    <div className="travel-container">
      <div className="travel-list">
        {plans.map((plan) => (
          <TravelPlanCard
            key={plan.id}
            plan={plan}
            onDelete={deletePlan}
            onFavorite={addFavorite}
          />
        ))}
      </div>

      <div className="favorites">
        <h2 className="text-iron">Favorites</h2>
        {favorites.map((fav) => (
          <div key={fav.id} className="favorite-card">
            <img src={fav.image} alt={fav.destination} />
            <p>
              <b>
                {fav.destination} ({fav.days} Days)
              </b>
            </p>
            <p>
              <b>{fav.totalCost} €</b>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TravelList;
