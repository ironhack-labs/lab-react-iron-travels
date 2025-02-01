import React from "react";

const TravelPlanCard = ({ plan, onDelete }) => {
  const getCostLabel = (totalCost) => {
    if (totalCost <= 350) {
      return "Great Deal";
    } else if (totalCost >= 1500) {
      return "Premium";
    }
    return "";
  };

  return (
    <li>
      <h2>{plan.destination}</h2>
      <p>{plan.date}</p>
      <p>{plan.description}</p>
      <p>Cost: ${plan.totalCost}</p>
      <p>
        {getCostLabel(plan.totalCost)}
        {plan.allInclusive && <span> | All Inclusive</span>}
      </p>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default TravelPlanCard;
