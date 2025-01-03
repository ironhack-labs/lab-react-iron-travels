import React, { useState, useEffect } from "react";
import travelPlansData from "../assets/travel-plans.json";
function TravelList() {
  const [travelPlans, setTravelPlans] = useState([]);
  useEffect(() => {
    setTravelPlans(travelPlansData);
  }, []);
  const getLabel = (plan) => {
    let labels = [];
    if (plan.totalCost <= 350) {
      labels.push("Great Deal");
    }
    if (plan.totalCost >= 1500) {
      labels.push("Premium");
    }
    if (plan.allInclusive) {
      labels.push("All Inclusive");
    }
    return labels.join(", ");
  };
  const handleDelete = (id) => {
    setTravelPlans(travelPlans.filter(plan => plan.id !== id));
  };
  return (
    <div>
      <h2>Travel Plans</h2>
      <ul>
        {travelPlans.map((plan) => (
          <li key={plan.id}>
            <h3>{plan.destination}</h3>
            <img src={plan.image} alt={plan.destination} style={{ width: "200px" }} />
            <p>{plan.description}</p>
            <p>Days: {plan.days}</p>
            <p>All-Inclusive: {plan.allInclusive ? "Yes" : "No"}</p>
            <p>Total Cost: ${plan.totalCost}</p>
            <p>Labels: {getLabel(plan)}</p>
            <button onClick={() => handleDelete(plan.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TravelList;