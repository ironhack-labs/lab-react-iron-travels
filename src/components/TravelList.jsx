import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  function updateTravelPlans(tripId){
    const newTravelPlans = travelPlans.filter((trip) => trip.id !== tripId);
    setTravelPlans(newTravelPlans);
  }

  return (
    <div>
      <h2>Travel Plans</h2>
      <ul>
        {travelPlans.map((trip) => (
            <TravelPlanCard
            key={trip.id}
            plan={trip}
            onDelete={updateTravelPlans} />
        ))}
      </ul>
    </div>
  );
}

export default TravelList;
