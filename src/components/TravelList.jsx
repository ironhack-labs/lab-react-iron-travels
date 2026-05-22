import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
  const [travels, setTravels] = useState(travelPlansData);

  const handleDelete = (event, travelId) => {
    OnDelete(event, travelId);
  };

  const OnDelete = (event, travelId) => {
    setTravels((travels) => {
      return travels.filter((travel) => travel.id !== travelId);
    });
  };

  const listContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  };

  return (
    <div className="travel-list-container" style={listContainerStyle}>
      {travels.map((travel) => {
        return (
          <TravelPlanCard
            key={travel.id}
            travel={travel}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
}

export default TravelList;
