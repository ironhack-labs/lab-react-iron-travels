import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [plans, setPlans] = useState(travelPlansData);

  
  const handleDelete = (id) => {
    setPlans(plans.filter((plan) => plan.id !== id));
  };

  return (
    <div>
      <h2>All Travel Plans</h2>
      <ul>
        {plans.map((plan) => (
          <li key={plan.id}>
            <img src={plan.image} alt={plan.destination} width="200" />
            <h3>{plan.destination}</h3>
            <p>{plan.description}</p>
            <p>Cost: {plan.totalCost} €</p>

            
            {plan.totalCost <= 350 && <p>Great Deal</p>}
            {plan.totalCost >= 1500 && <p>Premium</p>}
            {plan.allInclusive && <p>All Inclusive</p>}

            <button onClick={() => handleDelete(plan.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TravelList;