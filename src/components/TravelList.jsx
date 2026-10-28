import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);
  console.log(travelPlans);

 

  const handleRemove = (index) =>{
    const stateClone = [...travelPlans]
    stateClone.splice(index, 1)
    setTravelPlans(stateClone)

  }

  return (
    <div>
      {travelPlans.map((travel, index) => {
        return (
          <div key={travel.id}>
            <img src={travel.image} alt={travel.destination} />
            <h2>{travel.destination}, ({travel.days} days)</h2>
            <p>{travel.description}</p>
            <p>Price: {travel.totalCost}€</p>
            {travel.totalCost <= 350 && <span className="label great-deal">Great Deal</span>}
            {travel.totalCost >= 1500 && <span className="label premium">Premium</span>}
            {travel.allInclusive && <span className="label all-inclusive">All Inclusive</span>}

            <button onClick={()=> handleRemove(index)}>Delete</button>
            
            

          </div>
        );
      })}
    </div>
  );
}
export default TravelList;
