import React from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  return (
    <div>
      {travelPlansData.map((plan) => (
        <div key={plan.id}>
          <h2>{plan.destination}</h2>
          <img
            src={plan.image}
            alt={plan.destination}
            style={{ maxWidth: "100%" }}
          />
          <p>Days: {plan.days}</p>
          <p>All-Inclusive: {plan.allInclusive ? "Yes" : "No"}</p>
          <p>Total Cost: ${plan.totalCost}</p>
          <p>Description: {plan.description}</p>

          <h3>Travel Parts:</h3>
          <ul>
            {plan.parts.map((part, index) => (
              <li key={index}>
                <strong>{part.name}</strong>
                <p>{part.description}</p>
                <p>Cost: ${part.cost}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TravelList;
