import travelPlansData from "./assets/travel-plans.json";
import React, { useState } from 'react';
import { useEffect } from 'react';

const TravelList = () => {
    const [travelPlans, setTravelPlans] = useState([]);

    useEffect(() => {
        setTravelPlans(travelPlansData);
    }, []);

    const handleDeletePlan = (id) => {
        const updatedTravelPlans = travelPlans.filter(plan => plan.id !== id);
        setTravelPlans(updatedTravelPlans);
    };

    return (

        <div>
            <h2>Travel Plans</h2>
            <ul>
                {travelPlans.map(plan => {
                    <li key={plan.id}>
                        <h3> {plan.destination} </h3>
                        <p> Days: {plan.days} </p>
                        <p> Details: {plan.description} </p>
                        <p> Cost: {plan.totalCost} </p>
                        <button onClick={() => handleDeletePlan(plan.id)}>Delete</button>
                    </li>
                })}
            </ul>
        </div>
    );
};

export default TravelList;