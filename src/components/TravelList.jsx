import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const handleDelete = (travelId) => {
    console.log(travelId);
    setTravelPlans(
      travelPlans.filter(
        (currentDestination) => currentDestination.id !== travelId
      )
    );
    console.log(travelPlans);
  };

  return (
    <>
      <ul>
        {travelPlans.map((currentDestination) => (
          <TravelPlanCard
            key={currentDestination.id}
            plan={currentDestination}
            handleDelete={() => handleDelete(currentDestination.id)}
          />
        ))}
      </ul>
    </>
  );
}

export default TravelList;
