import React, { useState } from "react";
import travelPlansData from "./travel-plans.json";
import TravelList from "./assets/components/TravelList";

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const handleDelete = (id) => {
    setTravelPlans(travelPlans.filter((plan) => plan.id !== id));
  };

  return (
    <div>
      <h1>Travel Plans</h1>
      <ul>
        {travelPlansData.map((plan) => (
          <TravelPlanCard key={plan.id} plan={plan} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default TravelList;
