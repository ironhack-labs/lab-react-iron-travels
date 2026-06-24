import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

export default function TravelList() {
  const [plans, setPlans] = useState(travelPlansData);

  const handleDelete = (id) => {
    setPlans((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="travel-list" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      {plans.map((plan) => (
        <TravelPlanCard key={plan.id} plan={plan} onDelete={() => handleDelete(plan.id)} />
      ))}
    </div>
  );
}
