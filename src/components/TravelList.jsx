import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

export default function TravelList() {
    const [travelPlans, setTravelPlans] = useState(travelPlansData);

    const deletePlan = (planId) => {
        const filteredPlans = travelPlans.filter((plan) => {
            return plan.id !== planId;
        });
        setTravelPlans(filteredPlans);
    }

    return ( 
    <div className="plan-list-div">
       {travelPlans.map(plan => {
        return (
            <div key={plan.id} className="plan-div">
                <img className="plan-img" src={plan.image} />
                <h3>{plan.destination} ({plan.days} Days)</h3>
                {plan.description}
                {plan.totalCost <= 350 ? <p>Great deal</p> : <p>Premium</p>}
                Price: {plan.totalCost}€
                {plan.allInclusive && <p>All Inclusive</p>}
                <button className="button" onClick={() => deletePlan(plan.id)}>Delete</button>
            </div>
        )
       })}
    </div>
) 
    
}
