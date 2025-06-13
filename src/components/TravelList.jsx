import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
  const [travels, setTravels] = useState(travelPlansData);
  const [favorites, setFavorites] = useState([]);

  const handleDelete = (id) => {
    setTravels(travels.filter((plan) => plan.id !== id));
  };

  const handleFavorite = (plan) => {
    if (!favorites.some((fav) => fav.id === plan.id)) {
      setFavorites([...favorites, plan]);
    }
  };

  return (
    <div style={{ display: "flex", gap: "40px" }}>
      <div>
        <h2>Travel List</h2>
        {travels.map((plan) => (
          <TravelPlanCard
            key={plan.id}
            plan={plan}
            onDelete={handleDelete}
            onFavorite={handleFavorite}
          />
        ))}
      </div>

      <div>
        <h2>Favorites</h2>
        {favorites.map((plan) => (
          <div
            key={plan.id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h4>{plan.destination}</h4>
            <p>{plan.totalCost} €</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TravelList;
