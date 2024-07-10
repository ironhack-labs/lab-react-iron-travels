import { useState } from 'react';
import travelPlansData from "../assets/travel-plans.json";// Import the JSON data
import TravelPlanCard from './TravelPlanCard';



function TravelList() {
  // Step 2: Initialize state with the travel plans data
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const deleteTravelPlan = travelPlanId => {
    const filteredTravelPlans = travelPlans.filter(travelPlan => {
      return travelPlan.id !== travelPlanId;
    });

    setTravelPlans(filteredTravelPlans);
  };


 
  return (
    <div className='travel-list'>
      <h2>Travel Plans</h2>
      {travelPlans.map(travelPlan => {
        return <TravelPlanCard key={travelPlan.id} travelPlan={travelPlan} clickToDelete={deleteTravelPlan} />;
      })}
    </div>
  );
}

export default TravelList;