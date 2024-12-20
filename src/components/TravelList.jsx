import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [list, setList] = useState(travelPlansData);
  

  
  function generateLabel (plan){
    if(plan.totalCost <= 350){
      return <span> Great Deal!</span>
    }
    else if (plan.totalCost >= 350){
      return <span> Premium </span>
    }
    else if (plan.allInclusive) {
      return <span> All Inclusive </span>
    }
    return null;
  };

  
  const updateList = (planId) => {
    const filteredList = list.filter((plan) => plan.id !== planId);
    setList(filteredList); 
  };

  
  return (
    <div>
      <h1> Travel Plans</h1>
      <ul>
        {list.map((plan) => (
          <li key={plan.id}>
            <h3>{plan.destination}</h3>
            <p>Labels: {generateLabel(plan)}</p>
            <button onClick={() => updateList(plan.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    );
}


export default TravelList;