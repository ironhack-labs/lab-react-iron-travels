import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import { TravelCard } from "./TravelCard";

export const TravelList = () => {
  const [travelData, setTravelData] = useState(travelPlansData);
  return (
    <div>
      <div id="travel-list">
        {travelData.map((travelPlan) => {
          return (
            <TravelCard
              travelPlan={travelPlan}
              key={travelPlan.id}
              travelData={travelData}
              setTravelData={setTravelData}
            />
          );
        })}
      </div>
    </div>
  );
};
