import React from "react";

function FavoritePlanCard({ plan }) {
  return (
    <div className="favorite-card">
      <div className="favorite-image-container">
        <img src={plan.image} alt={plan.destination} className="travel-image" />
      </div>
      <div className="favorite-details">
        <h3>{plan.destination} ({plan.days} Days)</h3>
        <p className="travel-price">Price: <span>{plan.totalCost} €</span></p>
      </div>
    </div>
  );
}

export default FavoritePlanCard;