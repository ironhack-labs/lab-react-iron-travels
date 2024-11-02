import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

const TravelList = () => {
    const [destination, setDestination] = useState(travelPlansData);
function handleDelete(id) {
  const filteredData = destination.filter((i) => i.id !== id);
  setDestination(filteredData)
}
  return (
    <>
        {destination.map((plan) => 
            (
                <div key={plan.id} className="cardContainer">
                   <div className="card">
                   <img src={plan.image} alt="" />
                    <div className="text">
                    <h2>{plan.destination}</h2>
                    <h3>{plan.description}</h3>
                    <h3>Price: {plan.totalCost}€ {plan.allInclusive ? <label className="allInclusive">All Inclusive</label> : null}</h3>
                    {plan.totalCost <= 350 ? <label className="greatDeal">Great Deal</label> : null}
                    {plan.totalCost >= 1500 ? <label className="premium">Premium</label> : null} 
                    <button onClick={() => handleDelete(plan.id)}>Delete</button>                   
                    </div>
                    
                   </div>
                </div>
            )
        )}
        
    </>
  )
}

export default TravelList