import travelPlansData from "../../data/travel-plans.json"

import { useState } from "react";

function TravelList() {
    const [travelPlans, setTravelPlans] = useState(travelPlansData);
    
    const deleteTravel = travelId => {
        const filteredTravel = travelPlans.filter(travelPlan => {
          return travelPlan.id !== travelId;
        });
     
        setTravelPlans(filteredTravel);
      };

    return (
        <div //style= {{ display: "block", border: "2px solid black" }}
 >
            <h2>Travel Plans</h2>
            {travelPlans.map ((travelPlan) => (
                <div style= {{ display: "block", border: "2px solid black", alignItems: "center"}}key={travelPlan.id}>
                     <img src={travelPlan.image} width={250} height={250} style={{ maxWidth: "100%", maxHeight: "100%" }} />
                    <h3 >{travelPlan.destination }</h3>
                    <p>{travelPlan.days}</p>
                    <p>{travelPlan.allInclusive}</p>
                    <p>{travelPlan.totalCost}</p>
                    <p>{travelPlan.description}</p>
                    {travelPlan.allInclusive  && <p>All inclusive </p>}
                    {travelPlan.totalCost < 350 && <p>Great Deal </p>}
                    {travelPlan.totalCost > 1500 && <p>Premium </p>}
                    <button onClick={() => deleteTravel(travelPlan.id)} className="btn-delete">
              Delete 
            </button>
                </div>
            ))}
        </div>
    );
}

export default TravelList