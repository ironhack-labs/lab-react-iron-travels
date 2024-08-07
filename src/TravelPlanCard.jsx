import React, { useState } from 'react';

const TravelPlanCard = ({ plan, onDelete, onFavorite }) => {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const handleFavoriteClick = () => {
    onFavorite();
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <li>
      {plan.destination} - ${plan.totalCost}
      {plan.totalCost <= 350 && <span> (Great Deal)</span>}
      {plan.totalCost >= 1500 && <span> (Premium)</span>}
      {plan.allInclusive && <span> (All Inclusive)</span>}
      <button onClick={onDelete}>Delete</button>
      <button 
        onClick={handleFavoriteClick} 
        style={{ backgroundColor: colors[colorIndex] }}
      >
        ♡
      </button>
    </li>
  );
};

export default TravelPlanCard;
