import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const deletePlan = (id) => {
    setTravelPlans(
      travelPlans.filter((plan) => plan.id !== id)
    );
  };

  return (
    <div>
      {travelPlans.map((plan) => (
        <div
          key={plan.id}
          style={{
            display: "flex",
            gap: "20px",
            border: "1px solid black",
            marginBottom: "20px",
            padding: "10px",
          }}
        >
          <img
            src={plan.image}
            alt={plan.destination}
            style={{ width: "250px", height: "180px", objectFit: "cover" }}
          />

          <div>
            <h2>
              {plan.destination} ({plan.duration})
            </h2>

            <p>{plan.description}</p>

            <p>
              <strong>Price:</strong> {plan.totalCost} €
            </p>

            <div style={{ display: "flex", gap: "10px" }}>
              {plan.totalCost <= 350 && (
                <span style={{ background: "green", color: "white", padding: "5px" }}>
                  Great Deal
                </span>
              )}

              {plan.totalCost >= 1500 && (
                <span style={{ background: "blue", color: "white", padding: "5px" }}>
                  Premium
                </span>
              )}

              {plan.allInclusive && (
                <span style={{ background: "black", color: "white", padding: "5px" }}>
                  All-Inclusive
                </span>
              )}
            </div>

            <button onClick={() => deletePlan(plan.id)}
              style={{
              backgroundColor : "grey"
              }}
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