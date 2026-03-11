import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const deletePlan = (planId) => {
    const filteredPlans = travelPlans.filter((plan) => {
      return plan.id !== planId;
    });

    setTravelPlans(filteredPlans);
  };

  return (
    <div>
      {travelPlans.map((plan) => {
        return (
          <div key={plan.id}>
            <img src={plan.image} alt={plan.destination} width="300" />
            <h2>{plan.destination}</h2>
            <p>{plan.days} days</p>
            <p>Cost: {plan.totalCost} €</p>
            <p>{plan.description}</p>

            {plan.totalCost <= 350 && <p>Great Deal</p>}
            {plan.totalCost >= 1500 && <p>Premium</p>}
            {plan.allInclusive && <p>All Inclusive</p>}

            <button onClick={() => deletePlan(plan.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default TravelList;