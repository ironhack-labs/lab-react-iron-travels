import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import "../App.css";

function TravelList() {
  const [plans, setPlans] = useState(travelPlansData);

  const handleDelete = (id) => {
    setPlans(plans.filter((plan) => plan.id !== id));
  };

  return (
    <div className="travel-list">
      {plans.map((plan) => {
        const labels = [];
        if (plan.totalCost <= 350) labels.push("Great Deal");
        if (plan.totalCost >= 1500) labels.push("Premium");
        if (plan.allInclusive) labels.push("All-Inclusive");

        return (
          <div key={plan.id} className="travel-card">
            <img src={plan.image} alt={plan.destination} className="travel-image" />
            <div className="travel-details">
              <h2>
                {plan.destination} ({plan.days} Days)
              </h2>
              <p className="description">{plan.description}</p>
              <p>
                <strong>Price:</strong> {plan.totalCost} €
              </p>

              <div className="labels">
                {labels.map((label, index) => (
                  <span
                    key={index}
                    className={`label ${
                      label === "Great Deal"
                        ? "great-deal"
                        : label === "Premium"
                        ? "premium"
                        : "all-inclusive"
                    }`}
                  >
                    {label}
                  </span>
                ))}
              </div>

              <button onClick={() => handleDelete(plan.id)}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TravelList;


