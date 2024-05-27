import data from "../assets/travel-plans.json";
import { useState } from "react";
import TravelCard from "./TravelCard";

export default function TravelList() {
  const [travelPlans, setTravelPlans] = useState(data);
  const [favorites, setFavorites] = useState([]);

  const handleDelete = (id) => {
    let updatedPlans = travelPlans.filter((plan) => plan.id !== id);
    setTravelPlans(updatedPlans);
  };

  const handleFavorite = (id) => {
    let onePlan = travelPlans.find((plan) => plan.id === id);
    let favoritedPlan = favorites.find((plan) => plan.id === id);

    if (onePlan) {
      setFavorites((prev) => [...prev, onePlan]);

      handleDelete(id);
    } else {
      setTravelPlans((prev) => [favoritedPlan, ...prev]);
      setFavorites((prev) => prev.filter((plan) => plan.id !== id));
    }
  };

  return (
    <div className="container">
      <div className="travelList">
        {travelPlans.length ? (
          travelPlans.map((plan) => (
            <TravelCard
              plan={plan}
              handleDelete={handleDelete}
              handleFavorite={handleFavorite}
            />
          ))
        ) : (
          <p>What? Are you going around the world? 😮 🌍</p>
        )}
      </div>
      <div className="favorites">
        <h2>Favorites</h2>

        {favorites.length ? (
          favorites.map((plan) => (
            <TravelCard plan={plan} handleFavorite={handleFavorite} />
          ))
        ) : (
          <p>You haven't favorited any plans yet ☹️</p>
        )}
      </div>
    </div>
  );
}