import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {

  const [travelPlans, setTravel] = useState(travelPlansData)

  const handleDelete = (index) =>{
    const clone = travelPlans.slice(0)
    clone.splice(index, 1)
    setTravel(clone)
  }

  return (
    <div>
      {travelPlans.map((eachPlan, index) => {
        return (
         <div className="mainContainer"> 
           <div>
            <img className="imgContainer" src={eachPlan.image} alt="picture" />
            </div>

            <div className="textInformation">
              <h4>{`${eachPlan.destination} (${eachPlan.days} days)`}</h4>
              <p>{eachPlan.description}</p>
              <p>Price: {eachPlan.totalCost}€</p>
              <span>
                {eachPlan.totalCost <= 350 ? "Great Deal" : eachPlan.totalCost >= 1500 ? "Premium" : ""}
                {eachPlan.allInclusive ? " All Inclusive" : ""}
              </span>
              <button onClick={handleDelete}>Delete</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TravelList