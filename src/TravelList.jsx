import React, { useState } from 'react';
import travelPlansData from '../assets/travel-plans.json';
import TravelPlanCard from './TravelPlanCard';

const TravelList = () => {
  const [plans, setPlans] = useState(travelPlansData);
  const [favorites, setFavorites] = useState([]);

  const handleDelete = (indexToDelete) => {
    const updatedPlans = plans.filter((_, index) => index !== indexToDelete);
    setPlans(updatedPlans);
  };

  const handleFavorite = (plan) => {
    setFavorites((prevFavorites) => [...prevFavorites, plan]);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <ul>
        {plans.map((plan, index) => (
          <TravelPlanCard 
            key={index} 
            plan={plan} 
            onDelete={() => handleDelete(index)} 
            onFavorite={() => handleFavorite(plan)} 
          />
        ))}
      </ul>
      <ul>
        <h3>Favorites</h3>
        {favorites.map((plan, index) => (
          <li key={index}>
            {plan.destination} - ${plan.totalCost}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TravelList;
