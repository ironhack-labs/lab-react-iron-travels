import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";


function TravelList() {
  const [travelPlans,setTravelPlans] = useState(travelPlansData);

  const handleDelete = (id) => {
    const updatedPlans = travelPlans.filter((plan) => plan.id !== id);
    setTravelPlans(updatedPlans);
  };

  return (
    <div className="travel-list">
      <h2>Travel Plans</h2>
      <ul>
        {travelPlans.map((plan) => {
        
          const labels = [];

          if (plan.totalCost <= 350) labels.push("Great Deal");
          if (plan.totalCost >= 1500) labels.push("Premium");
          if (plan.allInclusive) labels.push("All Inclusive");

          return (
            <li key={plan.id} className="travel-item">
              <img src={plan.image} alt={plan.destination} />
              <div className="travel-details">
                <h3>{plan.destination}</h3>
                <p>{plan.description}</p>
                <p><strong>Days:</strong> {plan.days}</p>
                <p><strong>Total Cost:</strong> ${plan.totalCost}</p>

              
                <div className="labels">
                  {labels.map((label, index) => (
                    <span key={index} className={`label ${label.toLowerCase().replace(" ", "-")}`}>
                      {label}
                    </span>
                  ))}
                </div>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(plan.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    
    </div>
  );
}

export default TravelList