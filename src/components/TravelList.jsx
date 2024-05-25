import React from "react";
import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

function TravelList() {
    const [travelPlans, setTravelPlans] = useState(travelPlansData);
  
    const clone = JSON.parse(JSON.stringify(travelPlansData));
    
    const handleDelete=(indexToDelete)=>{
    const clone=JSON.parse(JSON.stringify(travelPlans))
    clone.splice(indexToDelete,1)
    setTravelPlans(clone)
   }
    
   return (
      <div className="card-container">
        {travelPlans.map((eachPlan, index) => {
          return (
            <div key={eachPlan.id} className="main-card">
              <img
                src={eachPlan.image}
                alt={eachPlan.destination}
                height="200px"
              />
              <div className="details">
                <h2>
                  {eachPlan.destination} ({eachPlan.days} days)
                </h2>
                <p>{eachPlan.description}</p>
                <p>Price: {eachPlan.totalCost} €</p>
                <div className="price">
                  {eachPlan.totalCost <= 350 && (
                    <div className="great-deal">Great Deal</div>
                  )}
  
                  {eachPlan.totalCost >= 1500 && (
                    <div className="great-deal">Premium</div>
                  )}
  
                  {eachPlan.allInclusive && (
                    <div className="great-deal">All-Inclusive</div>
                  )}
                </div>
                <button className="delete" onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  






export default TravelList