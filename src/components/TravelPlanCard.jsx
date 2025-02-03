import React from "react";
import "../app.css"; // Ensure CSS styling is included

function TravelPlanCard({ plan, onDelete, onFavorite, favoriteColor }) {
  return (
    <div className="travel-card">
      <img src={plan.image} alt={plan.destination} className="travel-image" />
      <div className="travel-info">
        <h2>{plan.destination} ({plan.days} Days)</h2>
        <p className="description">{plan.description}</p>
        <p className="price"><strong>Price:</strong> {plan.totalCost} €</p>

        {/* CONDITIONAL LABELS */}
        <div className="labels">
          {plan.totalCost <= 350 && <span className="label great-deal">Great Deal</span>}
          {plan.totalCost >= 1500 && <span className="label premium">Premium</span>}
          {plan.allInclusive && <span className="label all-inclusive">All-Inclusive</span>}
        </div>

        {/* Favorite Button */}
        <button
          className="favorite-button"
          style={{ backgroundColor: favoriteColor }}
          onClick={() => onFavorite(plan.id)}
        >
          ♡
        </button>

        {/* Delete Button */}
        <button className="delete-button" onClick={() => onDelete(plan.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TravelPlanCard;
