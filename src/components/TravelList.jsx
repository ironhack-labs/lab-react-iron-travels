import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

export default function TravelList() {
  const [travelPlanList, setTravelPlanList] = useState(travelPlansData);

  const handleDeleteTravel = (planId) => {
    const filteredList = travelPlanList.filter(plan => plan.id !== planId);

    setTravelPlanList(filteredList);
  };

  return (
    <div className="cards-container">
      {travelPlanList.map(plan => {
        return (
            <TravelPlanCard key={plan.id} plan={plan} clickToDelete={handleDeleteTravel}/>
        );
      })}
    </div>
  );
}
