import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);
  const [favorites, setFavorites] = useState([]);

  const handleDelete = (id) => {
    setTravelPlans(travelPlans.filter((plan) => plan.id !== id));
    setFavorites(favorites.filter((plan) => plan.id !== id));
  };

  const handleFavorite = (plan) => {
    if (favorites.some((fav) => fav.id === plan.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== plan.id));
    } else {
      setFavorites([...favorites, plan]);
    }
  };

  return (
    <div className="travel-container">
      <section className="travel-list">
        <h2 className="section-title">Lista de Viajes</h2>
        {travelPlans.map((plan) => (
          <TravelPlanCard
            key={plan.id}
            plan={plan}
            onDelete={handleDelete}
            onFavorite={handleFavorite}
            isFavorite={favorites.some((fav) => fav.id === plan.id)}
          />
        ))}
      </section>
      <section className="favorites-list">
        <h2 className="section-title">Favoritos</h2>
        {favorites.map((plan) => (
          <TravelPlanCard
            key={plan.id}
            plan={plan}
            onDelete={handleDelete}
            onFavorite={handleFavorite}
            isFavorite={true}
          />
        ))}
      </section>
    </div>
  );
};

export default TravelList;