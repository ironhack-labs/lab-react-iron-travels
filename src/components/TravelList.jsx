import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const handleDelete = (id) => {
    const filteredPlans = travelPlans.filter((item) => item.id !== id);
    setTravelPlans(filteredPlans);
  };

  travelPlans.map((plan) => {
    return <TravelPlanCard key={plan.id} plan={plan} onDelete={handleDelete} />;
  });
}

export default TravelList;
