import React, { useState } from 'react';
import travelPlansData from '../assets/travel-plans.json';
import './TravelList.css'; // If you have styles for TravelList

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const handleDelete = (id) => {
    const updatedPlans = travelPlans.filter(plan => plan.id !== id);
    setTravelPlans(updatedPlans);
  };

  return (
    <div>
      <h1>Travel Plans</h1>
      <ul>
        {travelPlans.map((plan) => (
          <li key={plan.id} style={{ marginBottom: '20px' }}>
            <img src={plan.image} alt={plan.destination} style={{ width: '200px', height: '150px' }} />
            <h2>{plan.destination}</h2>
            <p>{plan.description}</p>
            <p>Days: {plan.days}</p>
            <p>Total Cost: ${plan.totalCost}</p>
            {plan.totalCost <= 350 && <span style={{ color: 'green' }}> - Great Deal</span>}
            {plan.totalCost >= 1500 && <span style={{ color: 'gold' }}> - Premium</span>}
            {plan.allInclusive && <span style={{ color: 'blue' }}> - All Inclusive</span>}
            <button onClick={() => handleDelete(plan.id)}>Delete</button>
            <h3>Parts:</h3>
            <ul>
              {plan.parts.map((part, index) => (
                <li key={index}>
                  <strong>{part.name}</strong>: {part.description} (Cost: ${part.cost})
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