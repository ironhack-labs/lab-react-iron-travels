import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";
import TravelPlanCard from "./TravelPlanCard.jsx";

function TravelList() {
    
const [travelPlans, setTravelPlans] = useState(travelPlansData);

 function deleteTravelPlan(id) {
     setTravelPlans(
    travelPlans.filter((plan) => plan.id !== id)
  );
  }

  return (
    <div>
        {travelPlans.map((travelPlan) => {
  return (
    <TravelPlanCard
      key={travelPlan.id}
      plan={travelPlan}
      onDelete={deleteTravelPlan}
    />
  );
})}
    </div>
  );
}

export default TravelList;