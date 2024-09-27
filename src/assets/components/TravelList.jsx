import React from 'react';
import travelPlansData from 'src/assets/travel-plans.json';

const TravelList = () => {
  return (
    <div>
      <h2>Travel Plans</h2>
      <ul>
        {travelPlansData.map((plan, index) => (
          <li key={index}>
            <span>{plan.destination}</span>
            <span>{plan.totalCost <= 350 ? 'Great Deal' : null}</span>
            <span>{plan.totalCost >= 1500 ? 'Premium' : null}</span>
            <span>{plan.allInclusive ? 'All Inclusive' : null}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TravelList;