import React, { useState } from 'react'
import travelPlansData from "../assets/travel-plans.json"

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);
  console.log("*****", travelPlansData)
  function handleDeletePlan(travelPlanId) {
    setTravelPlans(travelPlans.filter(plan => plan.id !== travelPlanId) )
  }
  return (
    <div>
            {travelPlans.map( (onePlan) => {
                return(
                    <div key={onePlan.id} className='plan-card'> 
                      <img src={onePlan.image} alt="Travel Image" style={{width : "300px"}}/>
                      <div>
                         <h3>{onePlan.destination} ({onePlan.days} Days)</h3>
                         <p>{onePlan.description}</p>
                         <p><b>Price:</b> {onePlan.totalCost}</p>
                         {onePlan.totalCost <= 350 && <p className='lable'><b>Great Deal</b></p>}
                         {onePlan.totalCost >= 1500 && <p className='lable'><b>Premium</b></p>}
                         <button onClick={() => handleDeletePlan(onePlan.id)}>Delete</button>
                      </div>
                   </div>
                )
            })}
    </div>
  )
}

export default TravelList