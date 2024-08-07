import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";
import FavoritePlans from "./FavoritePlans";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState([...travelPlansData]);
  const [favoritePlans, setFavoritePlans] = useState([]);

  function handleDeletePlan(id) {
    setTravelPlans((plans) => plans.filter((plan) => plan.id !== id));
  }

  function handleMakeFavorite(id) {
    if (favoritePlans.find((plan) => plan.id === id)) {
      setFavoritePlans((plans) => plans.filter((plan) => plan.id !== id));
      return;
    }

    const newFavorite = travelPlans.find((plan) => plan.id === id);
    setFavoritePlans((f) => [...f, newFavorite]);
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {travelPlans.map((plan) => (
          <TravelPlanCard
            key={plan.id}
            plan={plan}
            onDeletePlan={handleDeletePlan}
            onMakeFavorite={handleMakeFavorite}
          />
        ))}
      </ul>
      {favoritePlans.length && (
        <ul>
          {favoritePlans.map((plan) => (
            <FavoritePlans key={plan.id} plan={plan} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TravelList;
