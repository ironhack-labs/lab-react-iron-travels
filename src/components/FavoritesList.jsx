// src/components/FavoritesList.jsx

import React from 'react';
import TravelPlanCard from './TravelPlanCard';

const FavoritesList = ({ favorites, onDelete }) => {
  return (
    <div>
      <h2>Favorites</h2>
      <div className="favorites-list">
        {favorites.map((plan, index) => (
          <div key={plan.id} className="favorite-item">
            <img src={plan.image} alt={plan.destination} />
            <div className="favorite-details">
              <h3>{plan.destination} ({plan.days} days)</h3>
              <p>Price: ${plan.totalCost}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;
