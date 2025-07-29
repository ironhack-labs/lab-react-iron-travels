import { useState } from "react";
// import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

function TravelList({ travelPlansData, favouriteList, setFavouriteList }) {
  const [travelPlan, setTravelPlan] = useState(travelPlansData);
  const handleClick = (planId) => {
    const filteredList = travelPlan.filter((plan) => {
      return plan.id !== planId;
    });
    setTravelPlan(filteredList);
  };

  return (
    <>
      <div>
        {travelPlan.map((plan) => {
          return (
            <div key={plan.id}>
              <TravelPlanCard
                plan={plan}
                handleClick={handleClick}
                setFavouriteList={setFavouriteList}
                favouriteList={favouriteList}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TravelList;
