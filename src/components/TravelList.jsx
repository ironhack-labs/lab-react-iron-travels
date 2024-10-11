import "../css/travel-card.css";
import data from "../assets/travel-plans.json";
import { useState } from "react";
import { TravelPlanCard } from "./TravelPlanCard";

export const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState(data);
  const [favoritePlans, setFavoritePlans] = useState([]);

  const addFavorite = (id) => {
    console.log("addFavorite", id);
    const favoritePlan = travelPlans.find((plan) => plan.id === id);

    // Prevent adding duplicates
    if (!favoritePlans.some((plan) => plan.id === id)) {
      setFavoritePlans([...favoritePlans, favoritePlan]);
    }
  };

  const deleteTravelPlan = (id) => {
    const newTravelPlans = travelPlans.filter(
      (travelPlan) => travelPlan.id !== id
    );
    setTravelPlans(newTravelPlans);
  };

  return (
    <div className="travel-list-container">
      <div className="travel-list">
        {travelPlans.map((travelPlan) => {
          const handleAddFavorite = () => addFavorite(travelPlan.id);

          return (
            <div key={travelPlan.id}>
              <TravelPlanCard
                plan={travelPlan}
                deleteBtn={deleteTravelPlan}
                favoriteBtn={handleAddFavorite}
              />
            </div>
          );
        })}
      </div>

      {/* Favorites Section */}
      <div className="favorites-list">
        <h2>Favorites</h2>
        {favoritePlans.length === 0 ? (
          <p>No favorites yet.</p>
        ) : (
          favoritePlans.map((plan) => (
            <div key={plan.id}>
              <TravelPlanCard plan={plan} deleteBtn={deleteTravelPlan} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};
