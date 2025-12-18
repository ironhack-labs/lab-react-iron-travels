import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
  const [plans, setPlans] = useState(travelPlansData);
  const [favorites, setFavorites] = useState([]);
  const [favoriteColors, setFavoriteColors] = useState({});

  const colorCycle = ["purple", "blue", "green", "yellow", "orange", "red"];

  const handleDelete = (id) => {
    setPlans((prev) => prev.filter((plan) => plan.id !== id));
  };

  const handleFavorite = (plan) => {
    // Add to favorites if not present
    setFavorites((prev) => {
      const alreadyFav = prev.some((fav) => fav.id === plan.id);
      return alreadyFav ? prev : [...prev, plan];
    });

    // Cycle button color for this plan
    setFavoriteColors((prev) => {
      const currentIndex = prev[plan.id] ?? -1;
      const nextIndex = (currentIndex + 1) % colorCycle.length;
      return { ...prev, [plan.id]: nextIndex };
    });
  };

  return (
    <div className="lists-layout">
      <div className="travel-grid">
        {plans.map((plan) => (
          <TravelPlanCard
            key={plan.id}
            plan={plan}
            onDelete={handleDelete}
            onFavorite={() => handleFavorite(plan)}
            favoriteColor={
              favoriteColors[plan.id] !== undefined
                ? colorCycle[favoriteColors[plan.id]]
                : undefined
            }
          />
        ))}
      </div>

      <aside className="favorites-panel">
        <h3>Favorites</h3>
        {favorites.length === 0 ? (
          <p className="muted">No favorites yet.</p>
        ) : (
          <ul className="favorites-list">
            {favorites.map((fav) => (
              <li key={fav.id}>{fav.destination}</li>
            ))}
          </ul>
        )}
      </aside>
    </div>
  );
}

export default TravelList;
