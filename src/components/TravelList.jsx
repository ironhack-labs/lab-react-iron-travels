import React, { useState, useEffect } from "react";
import travelPlansData from "../assets/travel-plans.json";

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState([]);

  useEffect(() => {
    setTravelPlans(travelPlansData);
  }, []);

  const getCostLabel = (totalCost) => {
    if (totalCost <= 350) return "Great Deal";
    if (totalCost >= 1500) return "Premium";
    return "";
  };

  const handleDelete = (id) => {
    console.log("Deleting item with id:", id);
    setTravelPlans(travelPlans.filter((plan) => plan.id !== id));
  };

  return (
    <div className="travel-list">
      <h2>Travel Plans</h2>
      <ul>
        {travelPlans.map((plan) => {
          const costLabel = getCostLabel(plan.totalCost);
          const allInclusiveLabel = plan.allInclusive ? "All Inclusive" : "";

          return (
            <li key={plan.id} className="travel-item">
              <img
                src={plan.image}
                alt={plan.destination}
                className="travel-image"
              />
              <h3>{plan.destination}</h3>
              <p>{plan.description}</p>
              <p>
                <strong>Days:</strong> {plan.days}
              </p>
              <p>
                <strong>Total Cost:</strong> ${plan.totalCost}
              </p>
              {costLabel && (
                <span
                  className={`label ${costLabel
                    .replace(" ", "-")
                    .toLowerCase()}`}
                >
                  {costLabel}
                </span>
              )}
              {allInclusiveLabel && (
                <span className="label all-inclusive">{allInclusiveLabel}</span>
              )}
              <button
                className="delete-button"
                onClick={() => handleDelete(plan.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TravelList;
