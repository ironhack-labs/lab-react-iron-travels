import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  function generateLabels(plan) {
    let labels = [];
    if (plan.totalCost <= 350) {
      labels.push(<span className="label good-deal">Great Deal</span>);
    } else if (plan.totalCost >= 1500) {
      labels.push(<span className="label premium">Premium</span>);
    }
    if (plan.allInclusive) {
      labels.push(<span className="label all-inclusive">All Inclusive</span>);
    }
    return labels;
  }

  const handleDelete = (id) => {
    const updatedPlans = travelPlans.filter((plan) => plan.id !== id);
    setTravelPlans(updatedPlans);
  };

  return (
    <div className="travel-list">
      {travelPlans.map((plan) => (
        <div key={plan.id} className="card">
          <img src={plan.image} alt={plan.destination} className="card-image" />
          <div className="card-content">
            <h2>{plan.destination}</h2>
            <p>{plan.description}</p>
            <p>
              <strong>Price:</strong> ${plan.totalCost}
            </p>
            {generateLabels(plan)}
            <button onClick={() => handleDelete(plan.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TravelList;
