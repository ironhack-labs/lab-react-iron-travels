// src/components/TravelPlanCard.js
import React from "react";

function TravelPlanCard({ plan, onDelete, onFavorite, buttonColor }) {
  return (
    <li>
      {plan.destination} - ${plan.totalCost}{" "}
      {plan.totalCost <= 350 && <span>Great Deal</span>}
      {plan.totalCost >= 1500 && <span>Premium</span>}
      {plan.allInclusive && <span>All Inclusive</span>}
      <button onClick={() => onDelete(plan.id)}>Delete</button>
      <button
        onClick={() => onFavorite(plan)}
        style={{ backgroundColor: buttonColor || "transparent" }}
      >
        ♡
      </button>
    </li>
  );
}

export default TravelPlanCard;
