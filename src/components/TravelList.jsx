import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json"; // Ensure the path is correct

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const getLabels = (plan) => {
    let labels = [];

    if (plan.totalCost <= 350) {
      labels.push('Great Deal');
    } else if (plan.totalCost >= 1500) {
      labels.push('Premium');
    }

    if (plan.allInclusive) {
      labels.push('All Inclusive');
    }

    return labels.join(', ');
  };

  const handleDelete = (id) => {
    setTravelPlans(prevPlans => prevPlans.filter(plan => plan.id !== id));
  };

  return (
    <div>
      <h2>Travel Plans</h2>
      <ul>
        {travelPlans.map((plan) => (
          <li key={plan.id}>
            {plan.destination} - {plan.description}
            <span> {getLabels(plan)}</span>
            <button onClick={() => handleDelete(plan.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TravelList;
