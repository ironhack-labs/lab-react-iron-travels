import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
  const [travel, setTravel] = useState([...travelPlansData]);

  function deal(cost) {
    if (cost < 350) {
      return "Great Deal";
    } else if (cost > 1500) {
      return "Premium";
    } else {
      return "";
    }
  }

  function removeItem(index) {
    const updatedTravel = travel.filter((location) => location.id !== index);
    setTravel(updatedTravel);
  }

  return (
    <div>
      {travel.map((location)=>(
        <TravelPlanCard key={location.id} location={location} removeItem={removeItem} deal={deal}/>
      ))}
    </div>
  );
}

export default TravelList;


