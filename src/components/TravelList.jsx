import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelCard from "./TravelCard";



// Uses ID to display element + description 
// This is where the STATE lives!

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const deletePlan = (id) => {
    setTravelPlans(travelPlans.filter((plan) => plan.id !== id));
  };

  return (
    <div>
      {travelPlans.map((plan) => (
        <TravelCard key={plan.id} plan={plan} deletePlan={deletePlan} />
      ))}
    </div>
  );
}


export default TravelList;
