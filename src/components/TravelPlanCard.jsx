import React from "react";
import { useState } from "react";


function TravelPlanCard ({plan}) { // destructure plan !!!

    const [displayedPlan, setPlanToDisplay] = useState(true);

    const removeTravelPlan = (id) => {
     
    if(plan.id === id){
        setPlanToDisplay(false);
    } else {
        setPlanToDisplay(true)
    }
    };

    if (!displayedPlan) return null;

    let isGreatDeal = plan.totalCost <= 350;
    let isPremium = plan.totalCost >= 1500;

    return (
        <div className="travelPlan" key={plan.id}>
        <img className="image" src={plan.image} />
        <div className="info">
          <p>{plan.destination} ({plan.days} days)</p>
          <p>{plan.description}</p>
          <p>Price: {plan.totalCost} €</p>
          {isGreatDeal && <p className="labelGD">Great Deal</p>}
          {isPremium && <p className="labelPremium">Premium</p>}
          <button onClick={() => removeTravelPlan(plan.id)}>Delete</button>
        </div>
      </div>
    )
}

export default TravelPlanCard;