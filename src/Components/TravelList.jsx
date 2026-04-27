import { useState } from "react";
import TravelPlansData from "../data/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

const TravelList = () => {
  const [plans, setPlans] = useState(TravelPlansData);
  const [favorites, setFavorites] = useState([]);

  // DELETE handler
  const handleDelete = (id) => {
    const updatedPlans = plans.filter((plan) => {
      return plan.id !== id;
    });

    const updatedFavorites = favorites.filter((plan) => {
      return plan.id !== id;
    });

    setPlans(updatedPlans);
    setFavorites(updatedFavorites);
  };

  // FAVORITE
  const handleFavorite = (plan) => {
    const exists = favorites.some((item) => {
      return item.id === plan.id;
    });

    if (!exists) {
      setFavorites([...favorites, plan]);
    }
  };

  return (
    <div className="travel-container">
      
      
      <div className="plans-section">
        <h2>Travel Plans</h2>

        {plans.map((plan, index) => {
          return (
            <TravelPlanCard
              key={index}
              plan={plan}
              onDelete={handleDelete}
              onFavorite={handleFavorite}
              isFavorite={favorites.some((fav) => {
                return fav.id === index;
              })}
            />
          );
        })}
      </div>

      {/* RIGHT SIDE: FAVORITES */}
      <div className="favorites-section">
        <h2>Favorites</h2>

        {favorites.length === 0 ? (
          <p>Until now, no favorites</p>
        ) : (
          favorites.map((plan, index) =>{
            return (
              <TravelPlanCard
                key={index}
                plan={plan}
                onDelete={handleDelete}
                onFavorite={handleFavorite}
                isFavorite={true}
              />
            );
          })
        )}
      </div>

    </div>
  );
};

export default TravelList;