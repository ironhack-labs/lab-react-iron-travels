import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
  const [travelPlan, setTravelPlan] = useState(travelPlansData);
  const [favPlan, setFavPlan] = useState([]);

  const deleteTravelplan = (planId) => {
    const newTravelPlanList = travelPlan.filter((travelPlanObj) => {
      return travelPlanObj.id !== planId;
    });
    setTravelPlan(newTravelPlanList);
  };

  const handleFavClick = (planId) => {
    if (favPlan.includes(planId)) {
      setFavPlan(favPlan.filter((favId) => planId !== favId));
    } else {
      setFavPlan([...favPlan, planId]);
    }
  };

  return (
    <div className="box">
      {travelPlan.map((travelObj) => {
        return (
          <div key={travelObj.id}>
            <TravelPlanCard
              plan={travelObj}
              onDelete={deleteTravelplan}
              onFav={handleFavClick}
              isFavActive={favPlan.includes(travelObj.id)}
            />
          </div>
        );
      })}
    </div>
  );
}
export default TravelList;
