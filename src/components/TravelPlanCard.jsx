import React from "react";

function TravelPlanCard({ plan, onDelete, onToggleFavorite, isFavorite, buttonColor }) {
  // Function to determine price label based on cost
  const getPriceLabel = (cost) => {
    if (cost <= 350) {
      return "Great Deal";
    } else if (cost >= 1500) {
      return "Premium";
    }
    return null;
  };

  const priceLabel = getPriceLabel(plan.totalCost);

  return (
    <div className="travel-card">
      <div className="travel-image-container">
        <img src={plan.image} alt={plan.destination} className="travel-image" />
      </div>
      <div className="travel-details">
        <h3>{plan.destination} ({plan.days} Days)</h3>
        <p className="travel-description">{plan.description}</p>
        <p className="travel-price">Price: <span>{plan.totalCost} €</span></p>
        <div className="badges-container">
          {priceLabel && <label className={`price-badge ${priceLabel.toLowerCase().replace(" ", "-")}-badge`}>{priceLabel}</label>}
          {plan.allInclusive && <label className="all-inclusive-badge">All Inclusive</label>}
        </div>
        <div className="card-actions">
          <div className="delete-button">
            <button onClick={() => onDelete(plan.id)}>Delete</button>
          </div>
          <button 
            className="favorite-button"
            onClick={() => onToggleFavorite(plan)}
            style={{ backgroundColor: buttonColor }}
          >
            ♡
          </button>
        </div>
      </div>
    </div>
  );
}

export default TravelPlanCard;