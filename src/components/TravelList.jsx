import React, { useState } from 'react';
import travelPlansData from "./assets/travel-plans.json";

function TravelList({travelPlans}) {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);
  const deleteTravelPlans = (itemId) => {
    const filteredItems = travelPlans.filter((item) => {
      return item._id !== itemId;
    });

    setTravelPlans(filteredItems);
  };

  const TravelList = () => {
    return (
      <div>
        {travelPlans.map((plan, index) => (
          <div key={index}>
            <div>
              {plan.name} - {plan.totalCost}
              {plan.totalCost <= 350 && <span> - Great Deal</span>}
              {plan.totalCost >= 1500 && <span> - Premium</span>}
              {plan.allInclusive && <span> - All Inclusive</span>}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
  <TravelList key={item._id} item={item} clickToDelete={deleteTravelPlans}/>
  )
};

export default TravelList;

