import { useState } from "react";


const TravelPlanCard = ({ plan, onDelete }) => {
    const labels = [];
    if (plan.totalCost <= 350) {
      labels.push("Great Deal");
    }
    if (plan.totalCost >= 1500) {
      labels.push("Premium");
    }
    if (plan.allInclusive) {
      labels.push("All Inclusive");
    }
  
    return (
      <div className="card" key={plan.id}>
        <img src={plan.imgURL} alt="Travel Image" />
        <h3>
          {plan.destination} (Days: {plan.days})
        </h3>
        <p>{plan.description}</p>
        <p>Price: {plan.totalCost}€</p>
  
        <div className="labels">
          {labels.map((label, index) => (
            <span key={index} className="label">
              {label}
            </span>
          ))}
        </div>
        <p>
          <button onClick={() => onDelete(plan.id)}>Delete</button>
        </p>
      </div>
    );
  };
  
  export default TravelPlanCard;
