// src/components/TravelList.jsx

import React from 'react';
import TravelPlanCard from './TravelPlanCard';

const TravelList = ({ travelPlans, onDelete, onFavorite }) => {
  return (
    <div>
      <h2>Travel Plans</h2>
      <ul>
        {travelPlans.map((plan) => (
          <li key={plan.id}>
            <TravelPlanCard
              plan={plan}
              onDelete={() => onDelete(plan.id)}
              onFavorite={onFavorite}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TravelList;
