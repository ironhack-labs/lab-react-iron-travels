// src/components/TravelPlanCard.jsx

import React from 'react';

const TravelPlanCard = ({ plan, onDelete, onFavorite }) => {
  const { id, destination, days, description, totalCost, image } = plan;

  const renderLabels = () => {
    const labels = [];
    if (totalCost <= 350) {
      labels.push(<span key="great-deal" className="label great-deal">Great Deal</span>);
    }
    if (totalCost >= 1500) {
      labels.push(<span key="premium" className="label premium">Premium</span>);
    }
    if (plan.allInclusive) {
      labels.push(<span key="all-inclusive" className="label all-inclusive">All Inclusive</span>);
    }
    return labels;
  };

  return (
    <div className="travel-plan-card">
      <div className="card-image">
        <img src={image} alt={destination} />
      </div>
      <div className="card-details">
        <h3>{destination} ({days} days)</h3>
        <p>{description}</p>
        <p>Price: ${totalCost}</p>
        <div className="labels">
          {renderLabels()}
        </div>
      </div>
      <div className="card-actions">
        <button className="delete-btn" onClick={() => onDelete(id)}>Delete</button>
        <button className="favorite-btn" onClick={() => onFavorite(plan)}>♡</button>
      </div>
    </div>
  );
};

export default TravelPlanCard;
