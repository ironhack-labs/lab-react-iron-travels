import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

export default function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const handleDelete = (planId) => {
    const updatedPlans = travelPlans.filter((plan) => plan.id !== planId);
    setTravelPlans(updatedPlans);
  };

  return (
    <div>
      <h2>Travel List</h2>

      <div>
        {travelPlans.map((plan) => (
          <TravelPlanCard key={plan.id} plan={plan} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}
