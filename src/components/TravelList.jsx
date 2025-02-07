import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

import { useState } from "react";

export default function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const deletePlan = (id) => {
    const filteredPlans = travelPlans.filter((travelPlan) => {
      return travelPlan.id !== id;
    });
    setTravelPlans(filteredPlans);
  };

  return (
    <>
      <div>
        {travelPlans.map((travelPlan) => {
            console.log(travelPlan.destination);
          return (
            <TravelPlanCard
              key={travelPlan.id}
              plan={travelPlan}
              deletePlan={deletePlan}
            />
          );
        })}
      </div>
    </>
  );
}
