import travelPlansData from "../assets/travel-plans.json";
import React, { useState } from "react";

function TravelList(){

    const [travelPlans, setTravelPlans] = useState(travelPlansData)
  
    const handleDeals = (travelPlans) => {
        if (travelPlans.totalCost <= 350){
            return (<label htmlFor="lowCost" style={{ backgroundColor: "green" }}><strong>Great Deal</strong> </label>);
        } else if(travelPlans.totalCost >= 1500){
            return (<label htmlFor="highCost" style={{ backgroundColor: "blue", color: "white" }}><strong>Premium</strong></label>);
        }  

    }
    const handleInclusive = (travelPlans) => {
        if(travelPlans.allInclusive){

            return (<label htmlFor="allInc" style={{ backgroundColor: "blue", color: "white" }}><strong>All-incluse</strong></label>);
        }
    }
    const deleteItem = (travelPlans) => {
        setTravelPlans((prevPlans) => prevPlans.filter((plan) => plan.id !== travelPlans.id));
    };
        return (<div>
            <div>
                {travelPlans.map(plan => (
                <div key={plan.id}>
                    <h2>{plan.destination}</h2>
                    <img src={plan.image} alt={`Image of ${plan.destination}`} style={{ width: "200px" }} />
                    <p>{plan.description}</p>
                    <p>
                    <strong> Cost:</strong> ${plan.totalCost}
                    </p>
                    <div>                    
                        {handleDeals(plan)}
                        {handleInclusive(plan)}
                        <button onClick={() => deleteItem(plan)}>Delete</button>
                    </div>
                </div>
                ))}
            </div>
        </div>)
}


export default TravelList;
