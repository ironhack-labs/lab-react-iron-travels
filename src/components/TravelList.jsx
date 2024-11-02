import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);
  return (
    <div>
      <h2>TravelList</h2>
      <div>
        {travelPlans.map((plan, index) => (
          <div key={index}>
            <h3>{plan.destination}</h3>
            <img src={plan.image} />
            <p>${plan.totalCost} ¢</p>
            <p>{plan.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TravelList;
