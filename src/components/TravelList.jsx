import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

const TravelList = () => {
  const [plans, setPlans] = useState(travelPlansData);

  const deleteBtn = (id) => {
    const filterPlans = plans.filter((plan) => {
      return plan.id !== id;
    });
    setPlans(filterPlans);
  };

  return (
    <div id="travelCardContainer">
      {plans.map((plan) => (
        <TravelPlanCard key={plan.id} plan={plan} deleteBtn={deleteBtn} />
      ))}
    </div>
  );
};

export default TravelList;
