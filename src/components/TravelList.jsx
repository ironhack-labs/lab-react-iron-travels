import React from "react";
import travelplansData from "../assets/travel-plans.json";
console.log(travelplansData);
import { useState } from "react";

function TravelList() {
  const [travelplans, setTravelPlans] = useState(travelplansData);
  
  
  
  const handleDelete=(indexToDelete)=>{
    const clone=JSON.parse(JSON.stringify(travelplans))
    clone.splice(indexToDelete,1)
    setTravelPlans(clone)

}
  return (
    <div>
      {travelplans.map((eachTravelPlans,index) => {
        const costLabel =
          eachTravelPlans.totalCost <= 350 ? (
            <button id="btnclr2">"Great Deal"</button>
          ) : eachTravelPlans.totalCost >= 1500 ? (
            <button id="btnclr1">"Premium"</button>
          ) : (
            ""
          );
        return (
          <div
            id="apartados"
            key={eachTravelPlans.id}
            style={{ textAlign: "center" }}
          >
            <hr />
            <img src={eachTravelPlans.image} style={{ width: "200px" }}></img>
            <div style={{ textAlign: "center" }}>
              <h3>
                {eachTravelPlans.destination}({eachTravelPlans.days}days )
              </h3>

              <p>{eachTravelPlans.description}</p>

              <p>
                <b>Price:</b>
                {eachTravelPlans.totalCost}
              </p>
              {eachTravelPlans.allInclusive && (
                <button id="btnclr1">All Inclusive</button>
              )}
              {costLabel && (
                <p>
                  <b>{costLabel}</b>
                </p>
              )}
                    <button id="del"onClick= {()=>handleDelete(index)}>Delete </button>
              <hr />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TravelList;
