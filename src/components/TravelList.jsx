import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  return (
    <div style={{ textAlign: "justify" }}>
      <h1>Iron Travels</h1>
      <h3>Tailored Travel Plans for Ironhackers</h3>

      {travelPlans.map((plan) => (
        <div
          key={plan.id}
          style={{
            border: "1px solid #ccc",
            padding: "1rem",
            marginBottom: "1.5rem",
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <img
            src={plan.image}
            alt={plan.destination}
            style={{ width: "300px", borderRadius: "8px" }}
          />

          <div>
            <h2>
              {plan.destination} ({plan.days} Days)
            </h2>
            <p>
              <em>{plan.description}</em>
            </p>
            <p>
              <strong>Price:</strong> {plan.totalCost} €
            </p>

            {plan.totalCost <= 350 && (
              <span
                style={{
                  backgroundColor: "Green",
                  padding: "3px",
                  fontWeight: "bold",
                  borderRadius: "5px",
                }}
              >
                Great Deal
              </span>
            )}
            {plan.totalCost >= 1500 && (
              <span
                style={{
                  backgroundColor: "blue",
                  padding: "3px",
                  fontWeight: "bold",
                  borderRadius: "5px",
                  marginRight: "10px",
                }}
              >
                Premium
              </span>
            )}
            {plan.allInclusive && (
              <span
                style={{
                  backgroundColor: "blue",
                  padding: "3px",
                  fontWeight: "bold",
                  borderRadius: "5px",
                }}
              >
                All Inclusive
              </span>
            )}

            <div style={{ marginTop: "20px" }}>
              <button
                onClick={() =>
                  setTravelPlans((prev) => prev.filter((p) => p.id !== plan.id))
                }
                style={{ backgroundColor: "gray" }}
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
