import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const getCostLabel = (totalCost) => {
    if (totalCost <= 350) return "Great Deal";
    if (totalCost >= 1500) return "Premium";
    return null;
  };

  const handleDelete = (id) => {
    setTravelPlans(travelPlans.filter(plan => plan.id !== id));
  };

  return (
    <div className="travel-list">
      {travelPlans.map((plan) => (
        <div key={plan.id} className="travel-plan">
          <img src={plan.image} alt={plan.destination} />
          <div className="plan-details">
            <h3>{plan.destination} ({plan.days} days)</h3>
            <p>{plan.description}</p>
            <p><strong>Price:</strong> ${plan.totalCost}</p>
            <div className="labels">
              {getCostLabel(plan.totalCost) && (
                <span className={`label ${getCostLabel(plan.totalCost).toLowerCase().replace(' ', '-')}`}>
                  {getCostLabel(plan.totalCost)}
                </span>
              )}
              {plan.allInclusive && (
                <span className="label all-inclusive">All-Inclusive</span>
              )}
            </div>
            <button 
              className="delete-btn"
              onClick={() => handleDelete(plan.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TravelList;
