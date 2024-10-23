import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const deleting = (id) => {
    const updatedPlans = travelPlans.filter((plan) => plan.id !== id);
    setTravelPlans(updatedPlans);
  };

  return (
    <div>
      <h1>Iron Travels</h1>
      <p>Tailored Travel Plans for Ironhackers</p>

      {travelPlans.map((plan) => (
        <div key={plan.id}>
          <img src={plan.image} alt={plan.destination} width="300px" />
          <h2>
            {plan.destination} ({plan.days} Days)
          </h2>
          <p>{plan.description}</p>
          <p>
            <strong>Price:</strong> {plan.totalCost} €
          </p>

          <div>
            {plan.totalCost <= 350 && (
              <span
                style={{
                  color: "green",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
              >
                Great Deal
              </span>
            )}

            {plan.totalCost >= 1500 && (
              <span
                style={{
                  color: "blue",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
              >
                Premium
              </span>
            )}

            {plan.allInclusive && (
              <span
                style={{
                  color: "orange",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
              >
                All-Inclusive
              </span>
            )}
          </div>
          <button
            onClick={() => deleting(plan.id)}
            style={{ marginTop: "10px" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TravelList;
