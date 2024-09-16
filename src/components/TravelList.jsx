import React, { useEffect } from "react";
import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json"


const TravelList = () => {
    const [travelPlans, setTravelPlans] = useState(travelPlansData);
  
    const deleteItems = (index) => {
      const updatedTravelPlans = [...travelPlans];
      updatedTravelPlans.splice(index, 1);
      setTravelPlans(updatedTravelPlans);
    };
  
    return (
      <div>
        <h2>Travel Plans</h2>
        <ul>
          {travelPlans.map((plan, index) => (
            <li key={index}>
              {plan.destination} - ${plan.totalCost}
              {plan.allInclusive ? " (All Inclusive)" : ""}
              {plan.totalCost <= 350 && <span> - Great Deal</span>}
              {plan.totalCost >= 1500 && <span> - Premium</span>}
              <button onClick={() => deleteItems(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default TravelList;