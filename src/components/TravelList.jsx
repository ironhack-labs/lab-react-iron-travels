import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import DestinationCard from "./DestinationCard";

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  function handleDelete(id) {
    setTravelPlans(
      travelPlans.filter((currentLocation) => currentLocation.id !== id)
    );
  }
  return (
    <>
      {travelPlans.map((location, index) => (
        <DestinationCard
          key={index}
          location={location}
          handleDelete={handleDelete}
        />
      ))}
    </>
  );
};

export default TravelList;
