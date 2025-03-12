import travelPlansData from "../assets/travel-plans.json";
import React, { useState } from "react";
import { TravelPlanCard } from "./TravelPlanCard";

export const TravelList = () => {
  const [travelPlans, setTravelPlansData] = useState(travelPlansData);
  const deleteTravel = (travelId) => {
    const filteredTravel = travelPlans.filter((travel) => {
      return travel.id !== travelId;
    });
    setTravelPlansData(filteredTravel); // Update the state with filteredTravel
  };
  return (
    <>
      {travelPlans.map((oneTravel) => {
        return <TravelPlanCard plan={oneTravel} deleteOne={deleteTravel} />;
      })}
    </>
  );
};
