import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const deletePlan = (id) => {
    setTravelPlans(travelPlans.filter(plan => plan.id !== id))
  }

  return (
    <div className="travel-list">
      {travelPlans.map((plan) => (
        <div key={plan.id} className="travel-card">
          <img src={plan.image} alt={plan.destination} />
          <div className="travel-info">
            <h3>{plan.destination}</h3>
            <p>{plan.description}</p>
            <p><strong>Duration:</strong> {plan.days} days</p>
            <p><strong>Price:</strong> ${plan.totalCost}</p>
            
            <div className="travel-labels">
              {plan.totalCost <= 350 && (
                <span className="label great-deal">Great Deal</span>
              )}
              {plan.totalCost >= 1500 && (
                <span className="label premium">Premium</span>
              )}
              {plan.allInclusive && (
                <span className="label all-inclusive">All Inclusive</span>
              )}
            </div>

            <button className="delete-btn" onClick={() => deletePlan(plan.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TravelList;