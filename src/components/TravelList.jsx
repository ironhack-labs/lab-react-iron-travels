import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  return (
    <div>
      {travelPlans.map((plan) => (
        <div
          key={plan.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            display: "flex",
            margin: "20px auto",
            maxWidth: "800px",
            overflow: "hidden",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img
            src={plan.image}
            alt={plan.destination}
            style={{ width: "300px", objectFit: "cover" }}
          />

          <div style={{ padding: "20px", flex: "1" }}>
            <h2 style={{ margin: "0 0 10px", fontSize: "1.5rem" }}>
              {plan.destination} ({plan.days} Days)
            </h2>

            <p style={{ margin: "0 0 10px", color: "#444" }}>{plan.description}</p>

            <p style={{ margin: "0 0 5px" }}>
              <strong>Price:</strong> {plan.totalCost} €
            </p>

            {plan.allInclusive && (
              <p style={{ margin: "0", fontWeight: "bold", color: "#2e7d32" }}>
                All-Inclusive
              </p>
            )}
            {plan.totalCost <= 350 && (
  <p style={{ margin: "0", fontWeight: "bold", color: "#1976d2" }}>
    Great Deal
  </p>
)}

{plan.totalCost >= 1500 && (
  <p style={{ margin: "0", fontWeight: "bold", color: "#f57c00" }}>
    Premium
  </p>
)}

           
          </div>
        </div>
      ))}
    </div>
  );
}

export default TravelList;