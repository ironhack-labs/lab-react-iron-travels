import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";
import "./TravelList.css";

function TravelList() {
  const colorCycle = ["purple", "blue", "green", "yellow", "orange", "red"];

  const [travelList, setTravelList] = useState(
    travelPlansData.map((p) => ({ ...p, color: "purple" }))
  );

  const [favorites, setFavorites] = useState([]);

  // Price label logic
  const getPriceLabel = (cost) => {
    if (cost <= 350) return "Great Deal";
    if (cost >= 1500) return "Premium";
    return null;
  };

  // Delete Function
  const handleDelete = (id) => {
    setTravelList(travelList.filter((plan) => plan.id !== id));
    setFavorites(favorites.filter((plan) => plan.id !== id)); // also removed from favorites
  };

  // FAVORITE FUNCTION
  const handleFavorite = (id) => {
    setTravelList((prevList) =>
      prevList.map((plan) => {
        if (plan.id === id) {
          // Change color
          const nextColorIndex =
            (colorCycle.indexOf(plan.color) + 1) % colorCycle.length;
          const updatedPlan = { ...plan, color: colorCycle[nextColorIndex] };

          // Add to favorites if not already
          if (!favorites.some((fav) => fav.id === id)) {
            setFavorites((prev) => [...prev, updatedPlan]);
          }

          return updatedPlan;
        }
        return plan;
      })
    );
  };

  return (
    <div className="layout-container">
      {/* LEFT SIDE: Main list */}
      <div className="travel-list">
        <h2>Main List</h2>

        {travelList.map((plan) => (
          <TravelPlanCard
            key={plan.id}
            plan={plan}
            onDelete={handleDelete}
            onFavorite={handleFavorite}
            getPriceLabel={getPriceLabel}
          />
        ))}
      </div>

      {/* RIGHT SIDE: Favorites */}
      <div className="favorites-list">
        <h2>Favorites 💛</h2>

        {favorites.length === 0 && <p>No favorites yet.</p>}

        {favorites.map((plan) => (
          <div key={plan.id} className="favorite-item">
            <p>
              <strong>{plan.destination}</strong> — {plan.country}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TravelList;
