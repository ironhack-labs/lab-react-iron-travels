import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
  const [plans, setPlans] = useState(travelPlansData);
  const handleDeletePlan = (idToDelete) => {
     const updatedPlans = plans.filter((plan) => plan.id !== idToDelete);
     setPlans(updatedPlans);
  };

  return (
    <div className="travel-list-container">
      <h2>Travel Plans</h2>
      <ul>
        {plans.map((plan) => (
            <TravelPlanCard 
            key={plan.id} 
            plan={plan} 
            onDelete={handleDeletePlan} 
          />
        ))}
      </ul>
    </div>
  );
}

export default TravelList;