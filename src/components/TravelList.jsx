import React, { useState, useEffect } from 'react';
import travelPlansData from '../assets/travel-plans.json';
import TravelPlanCard from './TravelPlanCard';
import './TravelList.css';

function TravelList() {
  const [travelPlans, setTravelPlans] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setTravelPlans(travelPlansData);
  }, []);

  const handleDelete = (id) => {
    const updatedTravelPlans = travelPlans.filter((plan) => plan.id !== id);
    setTravelPlans(updatedTravelPlans);
  };

  const handleFavorite = (plan) => {
    setFavorites((favs) => {
      return favs.includes(plan.id)
        ? favs.filter((favId) => favId !== plan.id)
        : [...favs, plan.id];
    });
  };

  return (
    <div className="travel-container">
      <div className="travel-list">
        {travelPlans.map((plan) => (
          <TravelPlanCard
            key={plan.id}
            plan={plan}
            onDelete={handleDelete}
            onFavorite={handleFavorite}
            isFavorite={favorites.includes(plan.id)}
          />
        ))}
      </div>


{/* YEAH YEAH ... could have created a favorite component .. but is late */}
      <div className="favorites-section">
        <h2>Favorites</h2>
        <div className="favorites-list">
          {favorites.map((favId) => {
            const plan = travelPlans.find((plan) => plan.id === favId);
            return (
              <div key={plan.id} className="favorite-item">
                <img
                  src={plan.image}
                  alt={plan.destination}
                  className="favorite-image"
                />
                <div className="favorite-details">
                  <h4>{plan.destination}</h4>
                  <p>Price: {plan.totalCost} €</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TravelList;
