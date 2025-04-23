import { useState } from "react";
import TravelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlansCard";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(TravelPlansData);
  const [favorites, setFavorites] = useState([]);

  const deleteTravelPlan = (travelPlanId) => {
    const newTravelPlanList = travelPlans.filter(
      (plan) => plan.id !== travelPlanId
    );
    setTravelPlans(newTravelPlanList);
    setFavorites(favorites.filter((fav) => fav.id !== travelPlanId));
  };

  const toggleFavorite = (plan) => {
    const isAlreadyFavorite = favorites.some((fav) => fav.id === plan.id);

    if (isAlreadyFavorite) {
      const updatedFavorites = favorites.filter((fav) => fav.id !== plan.id);
      setFavorites(updatedFavorites);
    } else {
      setFavorites([...favorites, plan]);
    }
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <section className="TravelList">
        <h2>Travel Plans</h2>
        {travelPlans.map((plan) => (
          <TravelPlanCard
            key={plan.id}
            plan={plan}
            onDelete={deleteTravelPlan}
            onFavorite={toggleFavorite}
            isFavorite={favorites.some((fav) => fav.id === plan.id)}
          />
        ))}
      </section>

      <section className="FavoritesList">
        <h2>Favorites</h2>
        {favorites.map((fav) => (
          <TravelPlanCard
            key={fav.id}
            plan={fav}
            onFavorite={toggleFavorite}
            isFavorite={true}
          />
        ))}
      </section>
    </div>
  );
}

export default TravelList;