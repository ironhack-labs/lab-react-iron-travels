import React from "react";
import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [travelCards, setTravelCards] = useState(travelPlansData);

  const clone = JSON.parse(JSON.stringify(travelPlansData));

  const removePlan = (indexToDelete) => {
    clone.splice(indexToDelete, 1);
    setTravelCards(clone);
  };

  return (
    <div className="card-container">
      {travelCards.map((eachPlan, index) => {
        return (
          <div key={eachPlan.id} className="main-card">
            <img
              src={eachPlan.image}
              alt={eachPlan.destination}
              height= "200px" width= "300px"
            />
            <div className="card-details">
              <h2>
                {eachPlan.destination} ({eachPlan.days} days)
              </h2>
              <p>{eachPlan.description}</p>
              <p>Price: {eachPlan.totalCost} €</p>
              <div className="chips">
              {eachPlan.totalCost <= 350 && <div className="deals">Great Deal</div>}

            {eachPlan.totalCost >= 1500 && <div className="deals">Premium</div>}

            {eachPlan.allInclusive && <div className="deals">All-Inclusive</div>}
            </div>
            <button className="delete" onClick={() => removePlan(index)}>
              Borrar
            </button>

            
            </div>

            
          </div>
        );
      })}
    </div>
  );
}

export default TravelList;
