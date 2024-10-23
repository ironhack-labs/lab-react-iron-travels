import React from "react";
import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);
  return (
    <div>
      <h1>Travel Plans</h1>
      <ul>
        {travelPlans.map((plan) => (
          <li key={plan.id}>
            <p>{plan.destination}</p>
            <img src={plan.image}></img>
            <p>{plan.days}</p>
            <p>{plan.allInclusive}</p>
            <p>{plan.totalCost}</p>
            <p>{plan.description}</p>
            <p>{plan.parts.name}</p>
            <p>{plan.parts.description}</p>
            <p>{plan.parts.cost}</p>
            {plan.totalCost <= 350 ? <button>Great Deal</button> : undefined}
            {plan.totalCost >= 1500 ? <button>Premium</button> : undefined}
            <button onClick={() => {
                setTravelPlans(travelPlans.filter(p => p.id !== plan.id))
            }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TravelList;
