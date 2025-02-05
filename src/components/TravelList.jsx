import { useState } from "react"
import travelPlansData from "../assets/travel-plans.json"

function TravelList() {
    const [travelPlans, setTravelPlans] = useState(travelPlansData)
    //console.log(travelPlansData);
    //console.log(travelPlans)
    const DealValue = (planValue) => {
        if (planValue <= 350) {
            return true
        }
        else if (planValue >= 1500) {
            return false
        }
    }
    const allInclusive = (allInclusiveinfo) => {
        return allInclusiveinfo
    }

    const deletePlan = (planId) => {
        
        const newListOfPlans =  travelPlans.filter(planItem => planItem.id !== planId)
        
        setTravelPlans(newListOfPlans)
    }
    
   
   

    return (
        travelPlans.map((plan) => {
            return (
                <div className="travelPlan" key={plan.id}>
                    <p>{plan.destination} ({plan.days} days)</p>
                    <img src={plan.image} alt="destination image" />
                    <p>{plan.description}</p>
                    <p>Price: {plan.totalCost} €</p>
                    {DealValue(plan.totalCost) === true ? (<p>Great Deal</p>)
                        : DealValue(plan.totalCost) === false ? (<p>Premium</p>)
                            : <p></p>}
                    {allInclusive(plan.allInclusive) && <p>All inclusive!</p>}
                    <button onClick={() => {deletePlan(plan.id)}}>delete</button>

                </div>
            )
        }
        )
    )
}

export default TravelList