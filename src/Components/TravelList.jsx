import React, { useState } from 'react';
import travelPlans from '../travel-plans.json';
import './travelList.css';

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
    <div className="travel-list">
      {plans.map(plan => (
        <div key={plan.id} className="travel-card">
          <h2>{plan.destination}</h2>
          <p>Cost: ${plan.cost} - <strong>{getLabel(plan.cost)}</strong></p>
          <button onClick={() => handleDelete(plan.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TravelList;
