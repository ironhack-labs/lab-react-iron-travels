import "./TravelList.css";
import { useState } from "react";

import travelPlansData from "../assets/travel-plans.json";
import { TravelPlanCard } from "./TravelPlanCard";

export const TravelList = () => {
  const [travelListState, setTravelListState] = useState(travelPlansData);

  const deletePlan = (id) => {
    setTravelListState(travelListState.filter((plan) => plan.id !== id));
  };
  return (
    <div className="card-list">
      {travelListState.map((plan) => {
        return (
          <TravelPlanCard key={plan.id} plan={plan} deletePlan={deletePlan} />
        );
      })}
    </div>
  );
};
