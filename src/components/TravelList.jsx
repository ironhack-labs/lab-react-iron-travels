import React from "react";
import { useState } from "react";

function TravelList({ plans }) {

  const [travelPlans, setTravelPlans] = useState(plans);

  const handleDelete = (id) => {
    const newPlans = travelPlans.filter((plan) => plan.id !== id);
    setTravelPlans(newPlans);
  
    };

    const getLabels = (plan) => {
      const labels = [];
      if (plan.totalCost <= 350) {
        labels.push(<span className="label great-deal">Great Deal</span>);
      }
      if (plan.totalCost >= 1500) {
        labels.push(<span className="label premium">Premium</span>);
      }
      if (plan.allInclusive) {
        labels.push(<span className="label all-inclusive">All Inclusive</span>);
      }
      return labels;
    };

  return (
    <div>
      <h1>Travel Plans</h1>
      {plans && plans.length > 0 ? (
        <ul>
          {plans.map((plan) => (
            <li key={plan.id} className="travel-plan">
              <h2>{plan.destination} ({plan.days} Days)</h2>
              <img src={plan.image} alt={plan.destination} style={{ width: "100%", height: "auto" }} />
              <p>{plan.description}</p>
              <p>Total Cost: ${plan.totalCost}</p>
              <div className="labels">
                {getLabels(plan)}
              </div>
              <p></p>
              <button onClick={() => handleDelete(plan.id)} className="delete-button">Delete</button>

              <ul>
                {plan.parts.map((part) => (
                  <li key={part.id}>
                    <h4>{part.name}</h4>
                    <p>{part.description}</p>
                    <p>Cost: ${part.cost}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>No travel plans available.</p>
      )}
    </div>
  );
}

export default TravelList;
