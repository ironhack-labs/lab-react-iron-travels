import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import Destination from "./Destination";

const TravelList = () => {
  const [locations, setLocations] = useState(travelPlansData);

  return (
    <div className="destination-container">
      <Destination locations={locations} setLocations={setLocations} />
    </div>
  );
};

export default TravelList;
