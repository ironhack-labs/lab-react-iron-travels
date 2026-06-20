
import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
  const [plans] = useState(travelPlansData);

  return (
    <div>
      <h2>Travel Plans</h2>

      {plans.map((plan) => (
        <TravelPlanCard key={plan.id} plan={plan} />
      ))}
    </div>
  );
}

export default TravelList;