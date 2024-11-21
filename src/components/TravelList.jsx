import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  function DeletePlan(id) {
    const filteredPlans = travelPlans.filter((plan) => plan.id !== id);
    setTravelPlans(filteredPlans);
  }

  return (
    <div className="travelList">
      <div>
        {travelPlans &&
          travelPlans.map((plan) => (
            <TravelPlanCard key={plan.id} plan={plan} deletePlan={DeletePlan} />
          ))}
      </div>
    </div>
  );
}

export default TravelList;
