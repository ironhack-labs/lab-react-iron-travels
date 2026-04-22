import { useState} from "react";

import travelPlansData from "../assets/travel-plans.json"

function TravelList() {

    const [travelPlans, setTravelPlans] = useState(travelPlansData)
    const deletePlan = (index) => { 
        const clone = structuredClone(travelPlans)
        clone.splice(index, 1)
        setTravelPlans(clone)
    }

    return (
        <div>
            {travelPlans.map((plan) => {
                return (
                    <div key={plan.id}>
                        <h2>{plan.destination}</h2>
                        <img src={plan.image} alt={plan.destination} width="350" />
                        <p>{plan.description}</p>
                        <p>Price: {plan.totalCost} €</p>
                        <p>Duration: {plan.days} days</p>

                        {plan.totalCost <= 350 && <p>Great Deal</p>}
                        {plan.totalCost >= 1500 && <p>Premium</p>}
                        {plan.allInclusive && <p>All Inclusive</p>}

                        <button onClick={() => deletePlan(index)}>Delete</button>
                    </div>
                );
            })}
        </div>
    )
}

export default TravelList