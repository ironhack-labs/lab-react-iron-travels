import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

export const TravelList = () => {
  const [plans, setPlans] = useState(travelPlansData);

  const handleDelete = (id) => {
    const updatedPlans = plans.filter((plan) => plan.id !== id);
    setPlans(updatedPlans);
  };

  return (
    <div>
      {plans.map((plan) => (
        <div key={plan.id} className="travel-card">
          <img src={plan.image} alt="iamge" className="travel-image" />
          <div className="travel-details">
            <div className="travel-info">
              <h1>
                {plan.destination} ({plan.days} days)
              </h1>
              <p>{plan.description}</p>
              <h2>Price: {plan.totalCost}€</h2>
            </div>
            <div>
              <div>
                {plan.totalCost <= 350 && <span>Great Deal</span>}
                {plan.totalCost >= 1500 && <span>Luxury</span>}
              </div>
              {plan.allInclusive && <span>All Inclusive</span>}
            </div>
            <div>
              <button onClick={() => handleDelete(plan.id)}>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
