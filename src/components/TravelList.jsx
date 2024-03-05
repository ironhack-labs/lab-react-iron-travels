import React, { useState } from 'react';
import travelPlansData from '../assets/travel-plans.json'

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const handleRemoveTravelPlan = (id) => {
    setTravelPlans((prevPlans) => prevPlans.filter((plan) => plan.id !== id));
  };

  return (
    <div>
      <h2>Travel Plans</h2>
      <ul>
        {travelPlans.map((plan) => (
          <li key={plan.id}>
            {plan.destination} - {plan.totalCost} USD
            {plan.totalCost <= 350 && <span> - Great Deal</span>}
            {plan.totalCost >= 1500 && <span> - Premium</span>}
            {plan.allInclusive && <span> - All Inclusive</span>}
            <button onClick={() => handleRemoveTravelPlan(plan.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TravelList;