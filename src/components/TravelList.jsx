import { useState } from "react";
import travelPlans from "../assets/travel-plans.json";



function TravelList() {
    const[travelPlan, setTravelPlan] = useState(travelPlans)
const handleDelete = (index)=>{
    const clonedList=structuredClone(travelPlan)
    clonedList.splice(index,1)
    setTravelPlan(clonedList)
}

  return (
    <>
      {travelPlan.map((x,index) => {
        return(
        <div className="card">
          <div className="imgContainer">
            <img src={x.image} alt="pictire of destination" />
          </div>
          <div className="textBox">
            <h3>
              {x.destination} ({x.days} Days)
            </h3>
            <p className="italic">{x.description}</p>
            <p>
              <span>Price:</span> {x.totalCost}€{" "}
            </p>
            <div className="labels">
                <div className="label"  style={{ display: x.allInclusive ? "block" : "none" }}>Premium</div>
                <div className="label" style={{ display: x.totalCost>1500 ? "block" : "none" }}>All-inclusive</div>
                <div className="label greatDeal" style={{ display: x.totalCost<350 ? "block" : "none" }}>Great Deal</div>
            </div>
          </div>
          <button onClick={()=>{handleDelete(index)}}>Delete</button>
        </div>)

      })}
    </>
  );
}
export default TravelList;
