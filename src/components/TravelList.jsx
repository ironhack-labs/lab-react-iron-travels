import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const deleteTravelPlan = (planId) => {
    const filteredPlans = travelPlans.filter((plan) => plan.id !== planId);
    setTravelPlans(filteredPlans);
  };

  return (
    <div>
      <h2>Travel Plans</h2>

      {travelPlans.map((plan) => (
        <div key={plan.id}>
          <h3>{plan.destination}</h3>

          <p>
            {plan.days} days in {plan.destination}
          </p>

          <p>Price: €{plan.totalCost}</p>

        
          {plan.totalCost <= 350 && <span>Great Deal </span>}
          {plan.totalCost >= 1500 && <span>Premium </span>}

       
          {plan.allInclusive && <span>All Inclusive </span>}

          <br />

          <button onClick={() => deleteTravelPlan(plan.id)}>Delete</button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default TravelList;
