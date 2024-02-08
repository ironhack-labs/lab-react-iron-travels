import React, { useState } from 'react';
import travelPlansData from '../assets/data/travel-plans.json';
import TravelPlanCard from './TravelPlanCard';

const TravelList = () => {
const [travelPlans, setTravelPlans] = useState(travelPlansData);


const handleRemove = (id) => {
    setTravelPlans(prevPlans => prevPlans.filter(plan => plan.id !== id));
  };

  return (
    <div>
      <h2>Travel Plans</h2>
      {travelPlans.map(plan => (
        <TravelPlanCard key={plan.id} plan={plan} onRemove={() => handleRemove(plan.id)}/>
      ))}
    </div>
  );
};

export default TravelList;