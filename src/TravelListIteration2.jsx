import travelPlansData from "./assets/travel-plans.json";
import React, { useState } from 'react';
import { useEffect } from 'react';

const TravelListIteration2 = () => {
    const [travelPlans, setTravelPlans] = useState([]);

    useEffect(() => {

        setTravelPlans(travelPlansData);
    }, []);

    const getLabelForCost = (cost, allInclusive) => {
        if (allInclusive === true) {
            return "All Inclusive";
        } else if (cost <= 350) {
            return "Great Deal";
        } else if (cost >= 1500) {
            return "Premium";
        } else {
            return "";
        }
    }

    return (

        <div>
            <h2>Travel Plans</h2>
            <ul>
                {travelPlans.map((plan, index) => {
                    <li key={index}>
                        <h3> {plan.destination} </h3>
                        <p> Days: {plan.days} </p>
                        <p> Details: {plan.description} </p>
                        <p> Cost: {plan.cost} </p>
                        {plan.allInclusive && <p> All Inclusive </p>}
                        <p>Label: {getLabelForCost(plan.cost, plan.allInclusive)} </p>
                    </li>
                })}
            </ul>
        </div>
    );
};

export default TravelListIteration2;