import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);
  const [favorites, setFavorites] = useState([]);
  const [favoriteColors, setFavoriteColors] = useState({});

  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const deletePlan = (id) => {
    const filteredPlans = travelPlans.filter((plan) => plan.id !== id);
    setTravelPlans(filteredPlans);
  };

  const handleFavorite = (plan) => {
    if (!favorites.some((favorite) => favorite.id === plan.id)) {
      setFavorites([...favorites, plan]);
    }

    const currentColorIndex =
      favoriteColors[plan.id] !== undefined
        ? favoriteColors[plan.id]
        : -1;

    const nextColorIndex =
      (currentColorIndex + 1) % colors.length;

    setFavoriteColors({
      ...favoriteColors,
      [plan.id]: nextColorIndex,
    });
  };

  return (
    <div className="travel-container">

      <div className="travel-list">
        {travelPlans.map((plan) => (
          <div key={plan.id}>
            <TravelPlanCard plan={plan} />

            <button
              onClick={() => handleFavorite(plan)}
              style={{
                backgroundColor:
                  favoriteColors[plan.id] !== undefined
                    ? colors[favoriteColors[plan.id]]
                    : "white",
              }}
            >
              ♡
            </button>

            <button onClick={() => deletePlan(plan.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>

      <div className="favorites">
        <h2>Favorites</h2>

        {favorites.map((favorite) => (
          <div key={favorite.id}>
            <TravelPlanCard plan={favorite} />
          </div>
        ))}
      </div>

    </div>
  );
}

export default TravelList;