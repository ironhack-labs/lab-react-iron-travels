import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./travel-plan-card";

function TravelList({ className = "" }) {
  const [travel, setTravel] = useState(travelPlansData);
  const [favorites, setFavorites] = useState([]);
  
  // Delete Button
  const handleDeleteButton = (id) => {
    const updatedTravel = travel.filter((plan) => plan.id !== id);
    setTravel(updatedTravel);
    // Delete plan from Fav List
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };

  // Fav Button
  const handleFavButton = (plan) => {
    if (favorites.some((fav) => fav.id === plan.id)) { 
      setFavorites(favorites.filter((fav) => fav.id !== plan.id));
    } else {
      setFavorites([...favorites, plan]); 
    }
  };

  return (
    <div className={`${className}`}>
      <div className="row">
      
        {/* Normal List */}
        <div className="col-md-6">
          <h3>Travel Plans</h3>
          <ul className="list-unstyled">
            {travel.map((plan) => (
              <TravelPlanCard
                key={plan.id}
                plan={plan}
                handleDeleteButton={handleDeleteButton}
                handleFavButton={handleFavButton}
                isFavoriteView={false}
              />
            ))}
          </ul>
        </div>

        {/* Favorites List */}
        <div className="col-md-6">
          <h3>Favorites</h3>
          <ul className="list-unstyled">
            {favorites.map((plan) => (
              <TravelPlanCard key={plan.id} plan={plan} isFavoriteView={true} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TravelList;
