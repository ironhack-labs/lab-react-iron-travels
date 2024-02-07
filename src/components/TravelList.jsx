import React, { useEffect } from "react";
import { useState } from "react";
import travels from "../src/assets/travel-plans.json"


function TravelList({ travelPlans }) {
    const [selectedPlan, setSelectedPlan] = useState(0); 

    const handlePlanClick = (index) => {
        setSelectedPlan(index);
    };

    return (
        <div>
            {travelPlans.map((plan, index) => (
                <div key={index} onClick={() => handlePlanClick(index)} style={{ cursor: 'pointer' }}>
                    <h3>{plan.destination}</h3>
                    <p>Total Cost: ${plan.totalCost}</p>
                    {plan.totalCost <= 350 && <span>Great Deal</span>}
                    {plan.totalCost >= 1500 && <span>Premium</span>}
                    {plan.allInclusive && <span>All Inclusive</span>}
                </div>
            ))}
            <div>
                <h4>Selected Plan: {travelPlans[selectedPlan].destination}</h4>
                <p>Total Cost: ${travelPlans[selectedPlan].totalCost}</p>
            </div>
        </div>
    );
}
export default TravelList;