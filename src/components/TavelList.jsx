import travelPlansData from "../assets/travel-plans.json";

import { useState } from "react";


function TravelList () {

    const [travelPlans, setTravelPlans] = useState(travelPlansData)
   
   /* const deleteTravelPlan = (id) => {
        setTravelPlans(prevPlans => prevPlans.filter(plan => plan.id !== id));
    }*/

    const deleteTravelPlan = (idToDelete) => {
        const updatedTravelPlans = [];
        for (let i = 0; i < travelPlans.length; i++) {
            if (travelPlans[i].id !== idToDelete) {
                updatedTravelPlans.push(travelPlans[i]);
            }
        }
        setTravelPlans(updatedTravelPlans);
    }
    

    return(
        <div className="travel-list">
             {travelPlans.map((travelData) => {
                return (
                    <div key = {travelData.id} className="travel-list-inner">
                        <div>
                            <img src= {travelData.image} />
                        </div>
                        <div className="travel-list-info">
                            <h4>{travelData.destination} ({travelData.days} Days) </h4>
                            <p>{travelData.description}</p>
                            <p>Price: {travelData.totalCost} </p>
                            {travelData.totalCost >= 1500 ? <p className="premium">premium</p> : null}
                            {travelData.totalCost < 350 ? <p className="great-deal">Great Deal</p> : null}
                            {travelData.allInclusive && <p className="all-inclusive">All-Inclusive</p>}
                            <button className="delete" onClick={() => deleteTravelPlan(travelData.id)}>Delete</button>
                        </div>
                    </div>
                )
            
        })
    }
        </div>
    
       
    )
}

export default TravelList