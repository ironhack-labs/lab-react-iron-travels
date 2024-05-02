import travelPlansData from "../assets/travel-plans.json";
import TravelCard from "./TravelCard";
import { useState } from "react";

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const deletePlan = (planId) => {
    const filteredPlans = travelPlans.filter((plan) => {
      return plan.id !== planId;
    });

    setTravelPlans(filteredPlans);
  };

  return (
    <div className="list">
      {travelPlans.map((plan) => {
        return (
          <TravelCard
            key={plan.id}
            plan={{
              ...plan,
              deleteFunction: () => deletePlan(plan.id),
            }}
          />
        );
      })}
    </div>
  );
};

export default TravelList;
