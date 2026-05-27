import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
    const [travelPlans, setTravelPlans] = useState(travelPlansData);

    const deletePlan = (planId) => {
        const filteredPlans = travelPlans.filter((plan) => {
            return plan.id !== planId;
        });

        setTravelPlans(filteredPlans);
    };
    return (
        <div>
            {travelPlansData.map((plan) => {
                return (
                    <div key={plan.id}>
                        <img src={plan.image} alt={plan.destination} width="300" />

                        <h2>{plan.destination}</h2>

                        {plan.totalCost <= 350 && <span>Great Deal</span>}

                        {plan.totalCost >= 1500 && <span>Premium</span>}

                        {plan.allInclusive && <span>All Inclusive</span>}

                        <p>{plan.days} Days</p>
                        <p>Total Cost: ${plan.totalCost}</p>
                        <p>{plan.description}</p>

                        <button onClick={() => deletePlan(plan.id)}>
                            Delete
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default TravelList;