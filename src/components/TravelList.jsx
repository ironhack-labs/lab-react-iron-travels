import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const getCostLabel = (cost) =>
    cost <= 350 ? "Great Deal" : cost >= 1500 ? "Premium" : "";

  const handleRemovePlan = (id) =>
    setTravelPlans(travelPlans.filter((plan) => plan.id !== id));

  return (
    <div>
      <h2>Travel Itineraries</h2>
      <ul>
        {travelPlans.map((plan) => (
          <li key={plan.id}>
            <h3>{plan.name}</h3>
            <p>{plan.details}</p>
            <br />
            <span>{getCostLabel(plan.totalCost)}</span>
            {plan.allInclusive && " - All Inclusive"}
            <button onClick={() => handleRemovePlan(plan.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TravelList;
