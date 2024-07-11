import React, { useState, useEffect } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState([]);

  useEffect(() => {
    setTravelPlans(travelPlansData);
  }, []);

  const handleDelete = (planId) => {
    const updatedPlans = travelPlans.filter((plan) => plan.id !== planId);
    setTravelPlans(updatedPlans);
  };

  return (
    <div className="travel-list">
      {travelPlans.map((plan) => (
        <TravelPlanCard key={plan.id} plan={plan} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default TravelList;
