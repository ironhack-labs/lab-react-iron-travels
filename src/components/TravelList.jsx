import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  function handleDelete(planId) {
    setTravelPlans((currentPlans) =>
      currentPlans.filter((plan) => plan.id !== planId),
    );
  }

  return (
    <ul>
      {travelPlans.map((plan) => {
        const dealLabel =
          plan.totalCost <= 350
            ? "Great Deal"
            : plan.totalCost >= 1500
              ? "Premium"
              : null;

        return (
          <li key={plan.id}>
            <img src={plan.image} alt={plan.destination} width="220" />
            <h2>{plan.destination}</h2>
            <p>{plan.days} days</p>
            <p>{plan.description}</p>
            <p>${plan.totalCost.toLocaleString()}</p>

            <div>
              {dealLabel ? <span>{dealLabel}</span> : null}
              {plan.allInclusive ? <span>All Inclusive</span> : null}
            </div>

            <button type="button" onClick={() => handleDelete(plan.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default TravelList;
