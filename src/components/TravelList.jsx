import travelPlansData from "../assets/travel-plans.json";
import React, { useState } from "react";
import "../App.css";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const handleDelete = (id) => {
    // Filter out the travel plan with the given id
    const updatedTravelPlans = travelPlans.filter(
      (travelPlan) => travelPlan.id !== id
    );
    // Update the state to remove the travel plan
    setTravelPlans(updatedTravelPlans);
  };

  return (
    <div className="travel-list">
      {travelPlans.map((travelPlan) => (
        <div key={travelPlan.id} className="travel-card">
          <img
            className="card-image"
            src={travelPlan.image}
            alt={travelPlan.destination}
          />
          <div className="travel-info">
            <h3>
              {travelPlan.destination} ({travelPlan.days} Days)
            </h3>
            <p className="description">{travelPlan.description}</p>
            <p className="price">
              Price: <span className="priceNumber">{travelPlan.totalCost}</span>
              €
            </p>
            {travelPlan.totalCost <= 350 && (
              <span className="label1">Great Deal</span>
            )}
            {travelPlan.totalCost >= 1500 && (
              <span className="label2">Premium</span>
            )}
            {travelPlan.allInclusive && (
              <span className="label3">All Inclusive</span>
            )}
            <div className="button-container">
              <button
                className="deleteButton"
                onClick={() => handleDelete(travelPlan.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TravelList;
