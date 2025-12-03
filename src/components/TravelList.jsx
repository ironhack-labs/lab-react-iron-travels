import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelItem from "./TravelItem.jsx";

function TravelList() {
  const [travels, setTravels] = useState(travelPlansData);

  const handleDelete = (id) => {
    setTravels(travels.filter((travel) => travel.id !== id));
  };

  return (
    <div>
      {travels.map((travel) => (
        <TravelItem key={travel.id} travel={travel} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default TravelList;
