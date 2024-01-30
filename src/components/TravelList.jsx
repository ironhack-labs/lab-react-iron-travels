
import React, { useState } from 'react';
import travelPlansData from '../assets/travel-plans.json'; 

function TravelList() {
    




    const [travelPlans, setTravelPlans] = useState(travelPlansData);

    
    const handleDelete = (id) => {
        const updatedTravelPlans = travelPlans.filter(plan => plan.id !== id);
        setTravelPlans(updatedTravelPlans);
    };

    return (
        <div>
            {travelPlans.map(plan => (
                <div key={plan.id} className="travel-plan">
                    <img src={plan.image} alt={plan.destination} className="travel-image" />
                    <h3>{plan.destination} ({plan.days} Days)</h3>
                    <p>{plan.description}</p>
                    <p>Price: {plan.totalCost} €</p>
                    {plan.totalCost <= 350 && <span className="label great-deal">Great Deal</span>}
                    {plan.totalCost >= 1500 && <span className="label premium">Premium</span>}
                    {plan.allInclusive && <span className="label all-inclusive">All-Inclusive</span>}
                    <button onClick={() => handleDelete(plan.id)} className="delete-button">Delete</button>
                </div>
            ))}
        </div>
    );
}

export default TravelList;
