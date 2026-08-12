import { useState } from "react";
import TravelPlanCard from "./TravelPlanCard";
import AllTravel from "../travel-plans.json"
function TravelList() {
  const [travelPlans, setTravelPlans] = useState(AllTravel);

  const handleDeleteButton = (id) => {
    let filteredTravelPlans = travelPlans.filter((plan) => {
      return plan.id !== id;
    });
    setTravelPlans(filteredTravelPlans);
  };

  return (
    <div className="TravelList">
      {travelPlans.map((plan) => {
        return (
          < TravelPlanCard key={plan.id} plan={plan} handleDeleteButton={handleDeleteButton}/>
        );
      })}
    </div>
  );
}
export default TravelList;
