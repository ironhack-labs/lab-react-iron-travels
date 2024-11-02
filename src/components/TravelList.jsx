import React, { useState } from "react";
import "../App.css";
import "../index.css";
import travelPlansData from "../assets/travel-plans.json";

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  // Function to remove a travel plan by id
  const handleDelete = (id) => {
    setTravelPlans(travelPlans.filter((plan) => plan.id !== id));
  };

  return (
    <div className="travel-list-container">
      <h2>Iron Travels - Travel Plans</h2>
      <ul>
        {travelPlans.map((plan) => (
          <li key={plan.id} className="travel-card">
            <h3>{plan.destination}</h3>
            <img src={plan.image} alt={plan.destination} />
            <p>{plan.description}</p>
            <p>Duration: {plan.days} days</p>
            <p>Total Cost: ${plan.totalCost}</p>

            {/* Conditional Rendering for Labels */}
            <div className="labels">
              {plan.totalCost <= 350 && <span className="label deal">Great Deal</span>}
              {plan.totalCost >= 1500 && <span className="label premium">Premium</span>}
              {plan.allInclusive && <span className="label inclusive">All Inclusive</span>}
            </div>

            {/* Delete Button */}
            <button onClick={() => handleDelete(plan.id)} className="delete-button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TravelList;