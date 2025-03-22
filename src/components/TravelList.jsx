import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const handleDelete = (id) => {
    setTravelPlans(travelPlans.filter(plan => plan.id !== id));
  };

  return (
    <div>
      <h2>Travel Plans</h2>
      <ul>
        {travelPlans.map((plan) => (
      <li key={plan.id}>
            <img src={plan.image} alt={plan.destination} />
            <h3>{plan.destination}</h3>
            {plan.totalCost <= 350 && <span>Great Deal</span>}
            {plan.totalCost >= 1500 && <span>Premium</span>}
            {plan.allInclusive && <span>All Inclusive</span>}
            <p>{plan.description}</p>
            <p>Duration: {plan.days} days</p>
            <p>Cost: ${plan.totalCost}</p>
            <button onClick={() => handleDelete(plan.id)}>Delete</button>
          </li>
    ))}
      </ul>
    </div>
    );
}

export default TravelList;