import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import "./TravelList.css";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  return (
    <div className="travel-list">
      {travelPlans.map((plan) => (
        <div className="travel-card" key={plan.id}>
          <img src={plan.image} alt={plan.destination} />

          <div>
            <h2>{plan.destination}</h2>

            <div className="labels">
              {plan.totalCost <= 350 && <span>Great Deal</span>}
              {plan.totalCost >= 1500 && <span>Premium</span>}
              {plan.allInclusive && <span>All Inclusive</span>}
            </div>

            <p>{plan.days} days</p>
            <p>${plan.totalCost}</p>
            <p>{plan.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TravelList;