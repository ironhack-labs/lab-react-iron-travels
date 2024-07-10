import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

function TravelPlan({ plan, clickToDelete }) {
  return (
    <div className="travelCard">
      <img src={plan.image} alt={plan.destination} />
      <div>
        <div key={plan.id}>
          <h3>
            {plan.destination} ({plan.days} days)
          </h3>
          <p>
            <i>{plan.description}</i>
          </p>
          <p>
            <b>Price:</b> {plan.totalCost}
          </p>
          <div className="labels">
            {plan.totalCost <= 350 ? (
              <label>Great Deal</label>
            ) : (
              plan.totalCost >= 1500 && <label>Premium</label>
            )}
          </div>
          <button onClick={() => clickToDelete(plan.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default function TravelList() {
  const [plans, setPlans] = useState(travelPlansData);

  const deletePlan = (planId) => {
    const filteredPlans = plans.filter((plan) => plan.id !== planId);
    setPlans(filteredPlans);
  };

  return (
    <div>
      <h2>Travel List</h2>
      <div>
        {plans.map((plan) => (
          <TravelPlan key={plan.id} plan={plan} clickToDelete={deletePlan} />
        ))}
      </div>
    </div>
  );
}
