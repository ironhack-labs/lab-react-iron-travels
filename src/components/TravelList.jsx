import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  function handleRemoveCard(cardIdToRemove) {
    setTravelPlans(travelPlans.filter((aCard) => aCard.id !== cardIdToRemove));
  }

  return (
    <>
      {travelPlans.map((plan) => {
        return (
          <TravelPlanCard
            key={plan.id}
            card={plan}
            handleRemoveCard={handleRemoveCard}
          />
        );
      })}
    </>
  );
}

export default TravelList;
