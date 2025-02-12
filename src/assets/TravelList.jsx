import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

export default function TravelList() {

    const [plans, setPlans] = useState(travelPlansData)

    const deletePlan = (planId) => {
        const filteredPlans = plans.filter(plan => plan.id !== planId)
        setPlans(filteredPlans)
    }

    return (
        plans.map(plan => {
            return (
                <>
                    <h1>{plan.destination}</h1>
                    <p>{plan.description}</p>
                    {plan.totalCost < 350 && "Great Deal"}
                    {plan.totalCost >= 350 && "Premium"}
                    <button onClick={() => deletePlan(plan._id)}>Delete</button>
                </>
            )
        })
    )
}