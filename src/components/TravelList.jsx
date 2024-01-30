import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const handleDelete = (id) => {
    const updatedTravelPlans = travelPlans.filter((plan) => plan.id !== id);
    setTravelPlans(updatedTravelPlans);
  };

  const renderLabels = (totalCost, allInclusive) => {
    return (
      <p>
        {totalCost <= 350 && <span className="label">Great Deal</span>}
        {totalCost >= 1500 && <span className="label premium">Premium</span>}
        {allInclusive && <span className="label">All Inclusive</span>}
      </p>
    );
  };

  return (
    <div>
      <h1>Travel Plans</h1>
      <ul>
        {travelPlans.map((travelPlan) => (
          <li key={travelPlan.id}>
            <img src={travelPlan.image} alt={travelPlan.destination} />
            <h2>{travelPlan.destination}</h2>
            <p>{travelPlan.description}</p>
            <p>Days: {travelPlan.days}</p>
            {renderLabels(travelPlan.totalCost, travelPlan.allInclusive)}
            <button onClick={() => handleDelete(travelPlan.id)}>Delete</button>
            <ul>
              {travelPlan.parts.map((part, index) => (
                <li key={index}>
                  <p>{part.name}</p>
                  <p>{part.description}</p>
                  <p>Cost: ${part.cost}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TravelList;
