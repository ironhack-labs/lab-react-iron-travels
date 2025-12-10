import { useState } from 'react';
import travelPlansData from '../assets/travel-plans.json'
import TravelPlanCard from './TravelPlanCard';


const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);


  const handleDelete = (id) => {
    setTravelPlans(travelPlans.filter(plan => plan.id !== id));
  };

  return (
    <div className="travel-list">
      {travelPlans.map((plan) => (
        <TravelPlanCard key={plan.id} plan={plan} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default TravelList;