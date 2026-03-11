import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [plans, setPlans] = useState(travelPlansData);

  const deletePlan = (id) => {
    const filteredPlans = plans.filter((plan) => {
      return plan.id !== id;
    });

    setPlans(filteredPlans);
  };

  return (
    <div>
      {plans.map((plan) => (
        <div
          key={plan.id}
          style={{ border: "1px solid black", margin: "20px", padding: "20px" }}
        >
          <img src={plan.image} width="300" />

          <h2>{plan.destination}</h2>

          <p>{plan.description}</p>

          <p>Days: {plan.days}</p>

          <p>Price: €{plan.totalCost}</p>

          {plan.totalCost <= 350 && <span>Great Deal </span>}
          {plan.totalCost >= 1500 && <span>Premium </span>}
          {plan.allInclusive && <span>All Inclusive</span>}

          <br />

          <button onClick={() => deletePlan(plan.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TravelList;
