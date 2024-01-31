import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";
import TravelPlanCard from "./TravelPlanCard";

export default function TravelList() {
  const [travelData, setTravelData] = useState(travelPlansData);

  const onClick = (clickedId) => {
    setTravelData((preTravelData) => {
      return preTravelData.filter((travel) => {
        return clickedId !== travel.id;
      });
    });
  };

  return (
    <>
      {travelData.map((travel) => {
        return (
          <TravelPlanCard key={travel.id} travel={travel} onDelete={onClick} />
        );
      })}
    </>
  );
}
