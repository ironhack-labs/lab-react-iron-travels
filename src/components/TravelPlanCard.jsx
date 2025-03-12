import React from 'react';

const TravelPlanCard = ({ plan, onDelete, onFavorite, isFavorite, favoriteColor }) => {
  return (
    <li key={plan.id}>
      {plan.image && <img src={plan.image} alt={plan.destination} className="travel-image" />}
      
      <h3>{plan.destination}</h3>
      <p>{plan.description}</p>
      <p>
        <strong>Price:</strong> ${plan.totalCost}
      </p>
      
      {plan.totalCost <= 350 && <span className="label great-deal"> Great Deal</span>}
      {plan.totalCost >= 1500 && <span className="label premium"> Premium</span>}
      
      {plan.allInclusive && <span className="label all-inclusive"> All Inclusive</span>}
      
      <div className="button-container">
        {/* Add favorite button */}
        <button
          onClick={() => onFavorite(plan.id)}
          className="favorite-button"
          style={{ backgroundColor: favoriteColor }}
        >
          ♥
        </button>
        
        {/* Delete button */}
        <button
          onClick={() => onDelete(plan.id)}
          className="delete-button"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TravelPlanCard;