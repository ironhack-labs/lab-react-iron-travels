
import travelPlansData from "../assets/travel-plans.json";
import "./TravelList.css";
import React, { useState } from "react";

function TravelList() {
 
  const [travelPlans, setTravelPlans] = useState(travelPlansData);


  const handleDelete = (id) => {
    const updatedPlans = travelPlans.filter((plan) => plan.id !== id);
    setTravelPlans(updatedPlans); 
  };

  return (
    <div className="travel-list">
      {travelPlans.map((plan) => (
        <div className="travel-card" key={plan.id}>
          <img className="travel-image" src={plan.image} alt={plan.destination} />
          <div className="travel-content">
            <h3 className="travel-title">
              {plan.destination} ({plan.days} Days)
            </h3>
            <p className="travel-description">{plan.description}</p>
            <p className="travel-price">Price: {plan.totalCost} €</p>

            <div className="travel-labels">
              {plan.totalCost <= 350 && <span className="label deal">Great Deal</span>}
              {plan.totalCost >= 1500 && <span className="label premium">Premium</span>}
              {plan.allInclusive && <span className="label inclusive">All Inclusive</span>}
            </div>

            <button
              className="delete-button"
              onClick={() => handleDelete(plan.id)} 
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TravelList;