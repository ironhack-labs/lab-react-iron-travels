import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";
import FavoritePlanCard from "./FavoritePlanCard";

function TravelList() {
  const [plans, setPlans] = useState(travelPlansData);
  const [favorites, setFavorites] = useState([]);
  const [buttonColors, setButtonColors] = useState({});
  
  const colorOptions = ["purple", "blue", "green", "yellow", "orange", "red"];
  
  const handleDelete = (id) => {
    const updatedPlans = plans.filter((plan) => plan.id !== id);
    setPlans(updatedPlans);
  
    setFavorites(favorites.filter(fav => fav.id !== id));
  };
  
  const handleToggleFavorite = (plan) => {
    const isFavorite = favorites.some(fav => fav.id === plan.id);
    
    if (isFavorite) {

      setFavorites(favorites.filter(fav => fav.id !== plan.id));
    } else {
      setFavorites([...favorites, plan]);
    }

    setButtonColors(prev => {
      const currentColorIndex = colorOptions.indexOf(prev[plan.id] || "purple");
      const nextColorIndex = (currentColorIndex + 1) % colorOptions.length;
      return { ...prev, [plan.id]: colorOptions[nextColorIndex] };
    });
  };
  
  return (
    <div className="app-container">
      <div className="travel-plans-section">
        <h2>Travel Plans</h2>
        <div className="travel-list-container">
          {plans.map((plan) => (
            <TravelPlanCard 
              key={plan.id} 
              plan={plan} 
              onDelete={handleDelete}
              onToggleFavorite={handleToggleFavorite}
              isFavorite={favorites.some(fav => fav.id === plan.id)}
              buttonColor={buttonColors[plan.id] || "purple"}
            />
          ))}
        </div>
      </div>
      
      <div className="favorites-section">
        <h2>Favorites</h2>
        <div className="favorites-list-container">
          {favorites.map((plan) => (
            <FavoritePlanCard 
              key={`fav-${plan.id}`} 
              plan={plan} 
            />
          ))}
          {favorites.length === 0 && (
            <p className="no-favorites">No favorites added yet</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default TravelList