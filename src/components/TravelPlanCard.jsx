// TravelPlanCard.jsx
import React from 'react';
import './TravelList.css';

function TravelPlanCard({ plan, onDelete, onFavorite, isFavorite }) {

    // dirty :D
  const getCostLabel = (cost) => (
    cost >= 1500 ? 'Premium' : cost <= 350 ? 'Great Deal' : null
  );

  return (
    <div className="travel-plan-card">
      <img src={plan.image} alt={plan.destination} className="travel-image" />
      <div className="travel-info">
        <h4>{plan.destination} ({plan.days} Days)</h4>
        <p>{plan.description}</p>
        <p className="travel-price">Price: {plan.totalCost} €</p>
        {getCostLabel(plan.totalCost) && (
          <span className={`label ${getCostLabel(plan.totalCost).toLowerCase().replace(/\s+/g, '-')}`}>
            {getCostLabel(plan.totalCost)}
          </span>
        )}
        {plan.allInclusive && <span className="label all-inclusive">All Inclusive</span>}
        <div className="card-bottom-buttons">
        <button type="button" onClick={() => onDelete(plan.id)} className="delete-button">Delete</button>
        <button type="button" onClick={() => onFavorite(plan)} className={`favorite-button ${isFavorite ? 'is-favorite' : ''}`}>
          {isFavorite ? '♥' : '♡'}
        </button>
        </div>
      </div>
    </div>
  );
}

export default TravelPlanCard;


