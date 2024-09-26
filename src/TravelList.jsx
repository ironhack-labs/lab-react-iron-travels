import React, { useState } from "react";
import travelPlans from "./assets/travel-plans.json";

function TravelList() {
  const [plans, setPlans] = useState(travelPlans);

  function deleteItem(id) {
    setPlans(plans.filter((plan) => plan.id !== id));
  }

  return (
    <div>
      {plans.map((plan) => (
        <div key={plan.id} className="travel-plan">
          <img src={plan.image} alt={plan.destination} />
          <h2>{plan.destination}</h2>
          <p>{plan.description}</p>
          <p>Days: {plan.days}</p>
          <p>All-Inclusive: {plan.allInclusive ? "Yes" : "No"}</p>
          <p>Total Cost: ${plan.totalCost}</p>
          <h3>Parts:</h3>

          <ul>
            {plan.parts.map((part, index) => (
              <li key={index}>
                <h4>{part.name}</h4>
                <p>{part.description}</p>
                <p>Cost: ${part.cost}</p>
              </li>
            ))}
          </ul>
          <h4>{plan.totalCost >= 350 ? "great deal" : null}</h4>
          <h4>{plan.totalCost >= 1500 ? "Premium" : null}</h4>
          <button onClick={() => deleteItem(plan.id)}>DELETE</button>
        </div>
      ))}
    </div>
  );
}

export default TravelList;
