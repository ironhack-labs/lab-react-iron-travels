import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";



function TravelList (){
    
const [travelPlans, settravelPlans] = useState(travelPlansData) 

function handleDelete (id){
    const updatedPlan = travelPlans.filter((plan)=>plan.id !== id)
    settravelPlans(updatedPlan)
}

return (
<div>
        {travelPlans.map((plan) => (
          <li key={plan.id}>
            <h3>{plan.destination}</h3>
            <img src={plan.image} />
            <p>{plan.description}</p>
            <p>Price: ${plan.totalCost}</p>
            {plan.totalCost <= 350 && <span>Great Deal</span>}
            {plan.totalCost >= 1500 && <span>Premium</span>}
            {plan.allInclusive && <span>All Inclusive</span>}
            <button onClick={()=>handleDelete(plan.id)}>Delete</button>
          </li>
        ))}
    </div>

)
}

export default TravelList