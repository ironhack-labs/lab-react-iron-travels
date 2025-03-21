import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import FavoritesList from "./FavoritesList";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (trip) => {
    if (!favorites.find((favorite) => favorite.id === trip.id)) {
      setFavorites([...favorites, trip]);
    }
  };

  return (
    <div className="trip-content">
      <div className="travel-plan">
        <TravelPlanCard
          plan={travelPlansData}
          addToFavorites={addToFavorites}
        />
      </div>
      <div className="favorites-list">
        <h2>Favorites</h2>
        <FavoritesList favorites={favorites} />
      </div>
    </div>
  );
}

export default TravelList;
