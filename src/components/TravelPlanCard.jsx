// src/components/TravelPlanCard.jsx
import React, { useState } from 'react';

const TravelPlanCard = ({ plan, onDelete, onFavorite }) => {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const getCostLabel = (cost) => {
    if (cost <= 350) {
      return 'Great Deal';
    } else if (cost >= 1500) {
      return 'Premium';
    }
    return '';
  };

  const handleFavoriteClick = () => {
    onFavorite(plan);
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <li>
      <div>
        <strong>{plan.destination}</strong> - {plan.date}
      </div>
      <div>Cost: ${plan.totalCost}</div>
      <div>
        <span>{getCostLabel(plan.totalCost)}</span>
        {plan.allInclusive && <span> | All Inclusive</span>}
      </div>
      {/* Favorite button */}
      <button
        onClick={handleFavoriteClick}
        style={{ backgroundColor: colors[colorIndex], cursor: 'pointer' }}
      >
        ♡
      </button>
      {/* Delete button */}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default TravelPlanCard;
