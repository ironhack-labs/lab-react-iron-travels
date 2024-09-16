import { useState } from "react";

import travelPlansData from "../assets/travel-plans.json"




function TravelList() {

    const [travelplans, setTravelplans] = useState (travelPlansData);


    const deletesetTravelplans = (idToDelete) => {
    const filteredPlans = travelplans.filter((travelPlan)=>{
    return travelPlan.id !== idToDelete
    })
    setTravelplans(filteredPlans)

        }
    return (
        <div>
          <h2>Travel List</h2>
          {travelplans.map((travelplan) => {
            return (
              <div>
              <div key={travelplan.id}>
                <div className="travel-list">
                <div>
                <img id="image" src={travelplan.image}/>
                </div>
                <div>
                <h3>{travelplan.destination}</h3>
                
                <p>{travelplan.totalcost}</p>
                <p>{travelplan.description}</p>
                <p>Price: {travelplan.totalCost}</p>
                <p>{travelplan.totalCost && travelplan.allInclusive}</p>
                <button onClick={() => deletesetTravelplans(travelplan.id)}>Delete</button>
                
                    {travelplan.totalCost > 350 ? 
                <label id="premium">premium</label> : <label id="greatdeal">Great Deal</label>
                }
                </div>
                </div>
                
                
                
              </div>
              </div>
            );
          })}
        </div>
      );
}



export default TravelList;