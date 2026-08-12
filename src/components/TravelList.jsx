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
          <h2>{plan.destination}</h2>
          <p>{plan.days} days</p>
          <p>${plan.totalCost}</p>
          <p>{plan.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TravelList;