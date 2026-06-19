import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
  const [plans, setPlans] = useState(travelPlansData);

  const handleDelete = (id) => {
    setPlans(plans.filter((plan) => plan.id !== id));
  };

  return (
    <div>
      {plans.map((plan) => {
        return (
          <TravelPlanCard plan={plan} key={plan.id} onDelete={handleDelete} />
        );
      })}
    </div>
  );
}

export default TravelList;
