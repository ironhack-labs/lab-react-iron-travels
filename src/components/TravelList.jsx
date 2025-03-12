import React, { useState } from 'react';
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from './TravelPlanCard';

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);
  
  const handleDelete = (id) => {
    const updatedPlans = travelPlans.filter(plan => plan.id !== id);
    setTravelPlans(updatedPlans);
  };

  return (
    <div>
      <h2>Travel Plans</h2>
      <ul>
        {travelPlans.map((plan) => (
          <TravelPlanCard 
            key={plan.id} 
            plan={plan} 
            onDelete={handleDelete} 
          />
        ))}
      </ul>
    </div>
  );
};

export default TravelList;