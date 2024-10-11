// src/components/TravelList.jsx
import React, { useState } from 'react';
import travelPlansData from '../assets/travel-plans.json';
import TravelPlanCard from './TravelPlanCard';

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);
  const [favorites, setFavorites] = useState([]);

  const handleDelete = (index) => {
    const updatedPlans = travelPlans.filter((_, i) => i !== index);
    setTravelPlans(updatedPlans);
  };

  const handleFavorite = (plan) => {
    if (!favorites.includes(plan)) {
      setFavorites((prevFavorites) => [...prevFavorites, plan]);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <div>
        <h2>Travel Plans</h2>
        <ul>
          {travelPlans.map((plan, index) => (
            <TravelPlanCard
              key={index}
              plan={plan}
              onDelete={() => handleDelete(index)}
              onFavorite={handleFavorite} // Pass favorite function
            />
          ))}
        </ul>
      </div>
      <div style={{ marginLeft: '20px' }}>
        <h2>Favorites</h2>
        <ul>
          {favorites.map((plan, index) => (
            <li key={index}>
              <strong>{plan.destination}</strong> - {plan.date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TravelList;
