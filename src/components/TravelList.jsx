import travelPlansData from "../assets/travel-plans.json"
import { useState } from "react"
import TravelPlanCard from "../components/TravelPlanCard"

function TravelList () {
 const [plans, setPlans] = useState(travelPlansData)

 const handleDelete = (id) => {
    setPlans(plans.filter((plan) => plan.id !== id))
 }

    return (
        <div className="TravelList">
            <h3>Travel List</h3>
            <hr />
        
        {plans.map((plan) => (
                <TravelPlanCard key={plan.id} plan={plan} handleDelete={handleDelete}/>             
            ))}

        </div>
    )
}

export default TravelList