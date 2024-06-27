import React, { useState } from 'react';
import travelPlans from '../travel-plans.json';

const TravelList = () => {
  const [plans, setPlans] = useState(travelPlans);

  const handleDelete = (id) => {
    setPlans(plans.filter(plan => plan.id !== id));
  };

  const getLabel = (cost) => {
    if (cost < 500) return 'Cheap';
    if (cost < 1000) return 'Moderate';
    return 'Expensive';
  };

  return (
    <div>
      {plans.map(plan => (
        <div key={plan.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
          <h2>{plan.destination}</h2>
          <p>Cost: ${plan.cost} - <strong>{getLabel(plan.cost)}</strong></p>
          <button onClick={() => handleDelete(plan.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TravelList;
