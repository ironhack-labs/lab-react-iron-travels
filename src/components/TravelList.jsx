import React, { useState } from 'react';
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
    const [travelPlans, setTravelPlans] = useState(travelPlansData);
  
    const handleDelete = (id) => {
        const updatedTravelPlans = travelPlans.filter(item => item.id !== id);
        setTravelPlans(updatedTravelPlans);
    };
  
    return (
        <div>
            <h2>Travel Plans</h2>
            <ul>
                {travelPlans.map((plan, index) => (
                    <li key={index}>
                        <h3>{plan.destination} ({plan.days} Days)</h3>
                        <p>{plan.description}</p>
                        <p>
                            <strong>Price:</strong> ${plan.totalCost}
                            {plan.totalCost <= 350 && <span> - Great Deal</span>}
                            {plan.totalCost >= 1500 && <span> - Premium</span>}
                            {plan.allInclusive && <span> - All Inclusive</span>}
                        </p>
                        <img src={plan.image} alt={plan.destination} />
                        <button onClick={() => handleDelete(plan.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TravelList;
