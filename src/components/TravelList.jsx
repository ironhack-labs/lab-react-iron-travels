import React, { useState } from 'react';
import travelPlansData from '../data/travel-plans.json';

function TravelList()  {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  // Seyahat planını listeden kaldırmak için fonksiyon
  const deleteTravelPlan = (id) => {
    const updatedTravelPlans = travelPlans.filter((plan) => plan.id !== id);
    setTravelPlans(updatedTravelPlans);
  };

  return (
    <div>
      <h2>Travel Plans</h2>
      <ul>
        {travelPlans.map((plan) => (
          <li key={plan.id}>
            <strong>{plan.destination}</strong> - {plan.duration}

            {/* Cost Label */}
            <span style={{ marginLeft: '10px' }}>
              {plan.totalCost <= 350
                ? 'Great Deal'
                : plan.totalCost >= 1500
                ? 'Premium'
                : null}
            </span>

            {/* All-Inclusive Label */}
            {plan.allInclusive && (
              <span style={{ marginLeft: '10px' }}>All Inclusive</span>
            )}

            {/* Delete Button */}
            <button
              style={{ marginLeft: '10px' }}
              onClick={() => deleteTravelPlan(plan.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TravelList;
