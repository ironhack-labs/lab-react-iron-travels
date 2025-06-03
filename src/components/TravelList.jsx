import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  
  const [travelPlans, setTravelPlansData] = useState(travelPlansData);
  
  const handleDelete = (planId) => {
    console.log(planId)
    const filteredPlans = travelPlans.filter((plan) => {
      return plan.id !== planId
    });

    setTravelPlansData(filteredPlans);
  }

  return (
    <div id="Travel List" style={{ maxWidth: "65%", minWidth: "750px" }}>
      {travelPlans.map((plan) => (
        <div key={plan.id} style={{ display: "flex", margin: "2em", padding: "2em", border: "1px solid black", boxSizing: "border-box" }}>
          <div>
            <img src={plan.image} alt={plan.destination} style={{ maxWidth: "25em" }}/>
          </div>
          <div className="d-flex flex-column align-items-start p-2">
            <h3>{`${plan.destination} (${plan.days} Days)`}</h3>
            <p><i>{plan.description}</i></p>
            <p><b>Price:</b>{`${plan.totalCost}€`}</p>
            <div className="d-flex gap-2">
              {plan.totalCost <= 350 && ( <span className="badge text-bg-success">Great Deal</span> )}
              {plan.totalCost >= 1500 && (<span className="badge text-bg-primary">Premium</span> )}
              {plan.allInclusive && ( <span className="badge text-bg-primary">All-inclusive</span> )}
            </div>
            <button className="btn btn-secondary mt-5" onClick={ () => handleDelete(plan.id) }>Delete</button>
          </div>          
        </div>
      ))}
    </div>
  )
}

export default TravelList;