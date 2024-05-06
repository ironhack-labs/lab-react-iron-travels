import { useState } from 'react';
import travelPlansData from '../assets/travel-plans.json';

const TravelList = () => {
  const [plans, setPlans] = useState(travelPlansData);

  const handleDelete = (id) => {
    setPlans(plans.filter(plan => plan.id !== id));
  };

  return (
    <div className='travel-card'>
      {plans.map(plan => (
        <li key={plan.id}>
          <img src={plan.image} alt="" />
          {plan.destination}
          {plan.totalCost <= 350 && <span> - Great Deal</span>}
          {plan.totalCost >= 1500 && <span> - Premium</span>}
          {plan.allInclusive && <span> - All Inclusive</span>}
          <button onClick={() => handleDelete(plan.id)}>Delete</button>
        </li>
      ))}
    </div>
  );
}

export default TravelList;
