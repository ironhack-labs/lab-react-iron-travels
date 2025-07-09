import { useState } from "react";

function TravelPlanCard({ plan, onDelete, onFavorite }) {
  let label = "";
  if (plan.parts[0].cost <= 350) {
    label = "Great Deal";
  } else if (plan.parts[0].cost >= 1500) {
    label = "Premium";
  } else if (plan.allInclusive === true) {
    label = "All Inclusive";
  }

  return (
    <div className="plan" key={plan.id}>
      <img className="planImg" src={plan.image} alt={plan.destination} />
      <div className="textContent">
        <div className="textOneLine">
          <h1>{plan.destination}</h1>
          <h1 className="amountDays">({plan.days} Days)</h1>
        </div>
        <h3 className="planDescrip">{plan.description}</h3>
        <h3>
          Price: <span className="cost">{plan.parts[0].cost} €</span>
        </h3>
        {label && <span className="labelTag">{label}</span>}
        <button className="deleteBtn" onClick={() => onDelete(plan.id)}>    
          Delete
        </button>
        <button className="favBtn" onClick={() => onFavorite(plan.id)}>Favorite</button>
      </div>
    </div>
  );
}

export default TravelPlanCard;

