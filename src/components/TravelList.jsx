import { useState } from "react";
import travelData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

export default function TravelList() {
  const [travelPlansData, setTravelPlanData] = useState(travelData);

  const deleteTravel = (travelId) => {
    const filteredTravelData = travelPlansData.filter(
      (travelPlan) => travelPlan.id !== travelId
    );
    setTravelPlanData(filteredTravelData);
  };

  return (
    <div>
      {travelPlansData.map((travel) => {
        const plan = {
          id: travel.id,
          image: travel.image,
          destination: travel.destination,
          days: travel.days,
          description: travel.description,
          totalCost: travel.totalCost,
          allInclusive: travel.allInclusive,
        };
        return (
          <TravelPlanCard
            key={plan.id}
            plan={plan}
            deleteTravel={deleteTravel}
          />
        );
      })}
    </div>
  );
}
