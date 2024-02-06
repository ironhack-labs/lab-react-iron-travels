import React from 'react';
import { useState } from 'react';
import TravelPlanCard from './TravelPlanCard';

import travelPlansData from '../data/travel-plans.json';

function TravelList() {
  const [data, setData] = useState(travelPlansData);

  const deleteCard = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };

  return (
    <div className="travel-cards">
      {data.map((plan, index) => {
        console.log(plan);
        return (
          <TravelPlanCard plan={plan} onDelete={() => deleteCard(index)} />
        );
      })}
    </div>
  );
}

export default TravelList;
