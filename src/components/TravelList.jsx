import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const [travelPlans, setTravelPlans] = useState(travelPlansData);
  const [favorites, setFavorites] = useState([]);
  const [colorIndex, setColorIndex] = useState(0);

  function deletePlan(id) {
    const filteredPlans = travelPlans.filter((plan) => {
      return plan.id !== id;
    });

    setTravelPlans(filteredPlans);
  }

  function addToFavorites(plan) {
    const alreadyFavorite = favorites.find((favorite) => {
      return favorite.id === plan.id;
    });

    if (!alreadyFavorite) {
      setFavorites([...favorites, plan]);
    }

    if (colorIndex === colors.length - 1) {
      setColorIndex(0);
    } else {
      setColorIndex(colorIndex + 1);
    }
  }

  return (
    <div className="travel-page">
      <div className="travel-list">
        {travelPlans.map((plan) => {
          return (
            <TravelPlanCard
              key={plan.id}
              plan={plan}
              onDelete={deletePlan}
              onFavorite={addToFavorites}
              favoriteColor={colors[colorIndex]}
            />
          );
        })}
      </div>

      <div className="favorites">
        <h2>Favorites</h2>

        {favorites.map((plan) => {
          return (
            <div key={plan.id} className="favorite-card">
              <img src={plan.image} alt={plan.destination} />

              <h3>
                {plan.destination} ({plan.days} Days)
              </h3>

              <p>{plan.totalCost} €</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TravelList;