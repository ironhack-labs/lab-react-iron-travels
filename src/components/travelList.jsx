// src/components/TravelList.jsx

import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

const TravelList = () => {
  const [plans, setPlans] = useState(travelPlansData);

  const handleDelete = (index) => {
    const updatedPlans = [...plans];
    updatedPlans.splice(index, 1);
    setPlans(updatedPlans);
  };

  return (
    <div>
      <h1>Travel Plans</h1>
      <ul>
        {plans.map((plan, index) => (
          <li key={index}>
            <img src={plan.image} alt={plan.destination} />
            <div>
              <h2>{plan.destination}</h2>
              <p>{plan.description}</p>
              <p>Total Cost: {plan.totalCost} USD</p>
              {plan.totalCost <= 350 && (
                <button>Great Deal</button>
              )}

              {plan.totalCost >= 1500 && (
                <button>Premium</button>
              )}

              {plan.allInclusive && (
                <button>All Inclusive</button>
              )}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TravelList;
