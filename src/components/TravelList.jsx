import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [plans, setPlans] = useState(travelPlansData);

  function handleDelete(id) {
    setPlans(plans.filter(plan => plan.id !== id));
  }

  return (
    <ul>
      {plans.map((plan) => {
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

        return (
          <li key={plan.id}>
            {plan.destination}
            {labels.length > 0 && (
              <> {labels.map(label => `[${label}]`).join(" ")} </>
            )}
            <button onClick={() => handleDelete(plan.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}

export default TravelList;