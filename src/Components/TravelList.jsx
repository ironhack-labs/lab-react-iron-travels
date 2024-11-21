import { useState } from "react";
import travelPlanData from "../assets/travel-plans.json";
import React from "react";
import "./TravelList.css";

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState(travelPlanData);

  const removeTravelPlan = (id) => {
    const updatedTravelPlans = travelPlans.filter((plan) => plan.id !== id);
    setTravelPlans(updatedTravelPlans);
  };

  return (
    <div>
      <h2>travel Plans</h2>

      <ul>
        {travelPlans.map((plan) => (
          <li key={plan.id}>
            <h3>{plan.destination}</h3>
            <img src={plan.image} alt="" />
            <p>{plan.description}</p>
            <p>Total Cost: {plan.totalCost}</p>
            {plan.totalCost <= 350 && <span>Great Deal</span>}
            {plan.totalCost >= 1500 && <span>Premium</span>}
            {plan.allInclusive && <span>All Inclusive</span>}
            <button onClick={() => removeTravelPlan(plan.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TravelList;
