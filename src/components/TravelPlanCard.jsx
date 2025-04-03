import React from "react";

const TravelPlanCard = ({ plan, handleDelete, handleFavorite, favoriteButtonColor }) => {
  let labels = [];

  if (plan.totalCost <= 350) {
    labels.push(<span key="deal" className="label deal">Great Deal</span>);
  }
  if (plan.totalCost >= 1500) {
    labels.push(<span key="premium" className="label premium">Premium</span>);
  }
  if (plan.allInclusive) {
    labels.push(<span key="allInclusive" className="label all-inclusive">All Inclusive</span>);
  }

  return (
    <li key={plan.id}>
      <strong>{plan.destination}</strong> - {plan.date}
      <div>Cost: ${plan.totalCost}</div>
      <div className="labels">{labels}</div>
      <button 
        onClick={() => handleDelete(plan.id)} 
        className="delete-btn"
      >
        Delete
      </button>
      <button
        onClick={() => handleFavorite(plan.id)}
        style={{ backgroundColor: favoriteButtonColor }}
        className="favorite-btn"
      >
        ♡
      </button>
    </li>
  );
};

export default TravelPlanCard;
