import React from "react";

function TravelPlanCard({ plan, handleDelete }) {
  return (
    <div className="travel-plan">
      <div className="travel-card">
        <img src={plan.image} alt={plan.description} className="city__img" />
        <div className="travel-details">
          <h2>
            {plan.destination} ({plan.days} Days)
          </h2>
          <p>{plan.description}</p>
          <span>Price: {plan.totalCost} €</span>
          <div className="labels">
            {plan.totalCost <= 350 && (
              <p className="great-deal"> Great Deal!</p>
            )}
            {plan.totalCost >= 1500 && <p className="premium"> Premium</p>}
            {plan.allInclusive && (
              <p className="all-inclusive">All-Inclusive</p>
            )}
          </div>
          <button onClick={() => handleDelete(plan.id)} className="delete-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TravelPlanCard;
