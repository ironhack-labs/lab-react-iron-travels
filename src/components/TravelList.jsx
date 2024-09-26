
import React, { useState } from 'react';
import travelPlansData from '../assets/travel-plans.json';

function TravelList() {
 
  const [travelPlans] = useState(travelPlansData);

  const deletePlan = (id) => {
    setTravelPlans(currentPlans => currentPlans.filter(plan => plan.id !== id));
  };


  return (
    <div>
      <h1>Travel Plans</h1>
      {travelPlans.map(plan => (
        <div className="travel-plan">
          <img src={plan.image} alt={`View of ${plan.destination}`} className="plan-image" />
          <div className="plan-details">
            <h2>{plan.destination}</h2>
           
            <p>Days: {plan.days}</p>
            <p>All Inclusive: {plan.allInclusive ? 'Yes' : 'No'}</p>
            <p>Total Cost: ${plan.totalCost}</p>
            <p>Description: {plan.description}</p>
            <div>
              <h3>Parts Included:</h3>
              {plan.parts.map((part, index) => (
                <div className="div2" key={index}>
                  <strong>{part.name}</strong>: {part.description} (Cost: ${part.cost})
                  <div className="labels">
            {plan.totalCost <= 350 && <span className="label great-deal">Great Deal</span>}
            {plan.totalCost >= 1500 && <span className="label premium">Premium</span>}
            {plan.allInclusive && <span className="label all-inclusive">All Inclusive</span>}
          
          
          
            <button onClick={() => deletePlan(plan.id)} className="delete-button">Delete</button>
          
          </div>
          
                </div>
                
                
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
  
}

export default TravelList;

