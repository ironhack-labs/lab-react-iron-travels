import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";


function TravelList(){
    const [travelList, setTravelList] = useState(travelPlansData);

    const removeTravelPlan = (id) => {
      setTravelList(travelList.filter((travel) => travel.id !== id));
      
      
    };

    return (
        
        <div>
          <div style={{alignItems:'center'}}>

            {travelList.map((travel) => (
              <div key={travel.id}>

                <img src={travel.image} alt={travel.destination} width={300} height={200} />

                <div>

                  <h3>{travel.destination} {travel.days}days</h3>
                  <h4>{travel.description}</h4>
                  <h5>Price: {travel.totalCost} € </h5>
                  <div>
                    {travel.totalCost > 1500 && <span>  Premium  </span>}
                    {travel.totalCost < 350 && <span> Great Deal </span>}
                    {travel.allInclusive && <span> = All Inclusive = </span>}
                  </div>
                  <button onClick={() => removeTravelPlan(travel.id)}>Delete</button>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
    );
    
}
export default TravelList