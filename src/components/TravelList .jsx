import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const handleDelete = (indexToDelete) => {
    const newPlans = travelPlans.filter((_, index) => index !== indexToDelete);
    setTravelPlans(newPlans);
  };

  return (
    <div className="travel-list">
      <h1>Iron Travels</h1>
      <h2>Tailored Travel Plans for Ironhackers</h2>
      <ul>
        {travelPlans.map((plan, index) => (
          <li key={index} className="travel-plan">
            <div className="image-container">
              <img src={plan.image} alt={plan.destination} />
            </div>
            <div className="plan-details">
              <h3>
                {plan.destination} ({plan.duration} Days)
              </h3>
              <p>{plan.description}</p>
              <div className="price-details">
                <span>Price: {plan.totalCost} €</span>
                {plan.totalCost <= 350 && (
                  <span className="great-deal"> Great Deal!</span>
                )}
                {plan.totalCost >= 1500 && (
                  <span className="premium"> Premium</span>
                )}
              </div>
              <button
                className="delete-button"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TravelList;
