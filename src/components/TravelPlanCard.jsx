import { useState } from "react";

const TravelPlanCard = ({ plan, onDelete }) => {

  let costLabel = '';
  let costLabelClass = '';
  if (plan.totalCost <= 350) {
    costLabel = 'Great Deal';
    costLabelClass = 'great-deal';
  } else if (plan.totalCost >= 1500) {
    costLabel = 'Premium';
  }

  return (
    <div className="travel-item">
      <img src={plan.image} alt={`View of ${plan.destination}`} />
      <div className="travel-details">
        <h3>{plan.destination}</h3>

        {/* Render labels */}
        {costLabel && <span className={`label ${costLabelClass}`}>{costLabel}</span>}
        {plan.allInclusive && <span className="label">All Inclusive</span>}

        <p>Description: {plan.description}</p>
        <p>Total Days: {plan.days}</p>
        <p>Total Cost: ${plan.totalCost}</p>
          
        {/* Delete button */}
        <button onClick={() => onDelete(plan.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TravelPlanCard;