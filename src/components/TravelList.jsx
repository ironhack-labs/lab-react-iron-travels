import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const deletePlan = (planId) => {
    const filteredPlans = travelPlans.filter(
      (plan) => plan.id !== planId
    );
    setTravelPlans(filteredPlans);
  };

  return (
    <div>
      {travelPlans.map((plan) => (
        <TravelPlanCard
          key={plan.id}
          plan={plan}
          deletePlan={deletePlan}
        />
      ))}
    </div>
  );
}

export default TravelList;
