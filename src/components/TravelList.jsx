import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import "./TravelList.css";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  function handleDelete(id) {
    const updatedList = travelPlans.filter(plan => plan.id !== id);
    setTravelPlans(updatedList);
  }

  return (
    <div>
      {travelPlans.map(plan => (
        <div key={plan.id} className="travel-card">
          <img src={plan.image} alt={plan.destination} className="travel-image" />
          <div className="travel-info">
            <h3>{plan.destination} ({plan.days} Days)</h3>
            <p><em>{plan.description}</em></p>
            <p><strong>Price:</strong> {plan.totalCost} €</p>

            <div className="labels">
              {plan.totalCost >= 1500 && <span className="label premium">Premium</span>}
              {plan.totalCost <= 350 && <span className="label deal">Great Deal</span>}
              {plan.allInclusive && <span className="label inclusive">All-Inclusive</span>}
            </div>

            <button
              onClick={() => handleDelete(plan.id)}
              className="delete-btn"
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
