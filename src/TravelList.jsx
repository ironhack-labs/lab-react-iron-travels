import { useState } from "react";
// This imports the data from the path shown in your screenshot
import travelPlansData from "./assets/travel-plans.json";
function TravelList() {
  // We put the data into state so we can modify it (like deleting)
  const [plans, setPlans] = useState(travelPlansData);

  return (
    <div className="TravelList">
      {plans.map((plan) => {
        return (
          <div key={plan.id} className="plan-card" style={{ border: "1px solid #ccc", margin: "10px", display: "flex", padding: "10px" }}>
            <img src={plan.image} alt={plan.destination} style={{ width: "150px" }} />
            
            <div className="plan-details">
              <h2>{plan.destination} ({plan.days} Days)</h2>
              <p>{plan.description}</p>
              <p>Price: {plan.totalCost} €</p>

              {/* 🟢 Iteration 2: Conditional Rendering Labels */}
              <div className="labels-container">
                {plan.totalCost <= 350 && <span style={{ backgroundColor: "green", color: "white", padding: "2px 5px", marginRight: "5px" }}>Great Deal</span>}
                {plan.totalCost >= 1500 && <span style={{ backgroundColor: "blue", color: "white", padding: "2px 5px", marginRight: "5px" }}>Premium</span>}
                {plan.allInclusive && <span style={{ backgroundColor: "blue", color: "white", padding: "2px 5px" }}>All Inclusive</span>}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TravelList;