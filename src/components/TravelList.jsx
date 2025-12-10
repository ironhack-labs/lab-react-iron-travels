import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);
  function getLabels(plan) {
    const labels = [];
    if (plan.totalCost <= 350) labels.push("Great Deal");
    if (plan.totalCost >= 1500) labels.push("Premium");
    if (plan.allInclusive) labels.push("All-Inclusive");
    return labels;
  }

  function handleDelete(id) {
    const filteredPlans = travelPlans.filter((plan) => plan.id !== id);
    setTravelPlans(filteredPlans);
  }

  return (
    <div>
      <ul>
        {travelPlans.map((plan) => (
          <li key={plan.id} className="travel-card">
            <img
              src={plan.image}
              alt={plan.destination}
              className="travel-image"
            />

            <div className="travel-info">
              <h3>
                {plan.destination} ({plan.days} days)
              </h3>
              <p>{plan.description}</p>
              <p className="price">Price: {plan.totalCost} €</p>
              <div className="labels">
                {getLabels(plan).map((label) => (
                  <span key={label}>{label} </span>
                ))}
              </div>
              <button
                className="delete-button"
                onClick={() => handleDelete(plan.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TravelList;
