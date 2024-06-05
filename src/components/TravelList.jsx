import React, { useState } from "react";
import travelPlansData from "/src/assets/travel-plans.json";
import TravePlanCard from "./TravelPlanCard";

const TravelList = () => {
  const [travels, setTravels] = useState(travelPlansData);

  const handleDelete = (travelId) => {
    const newTravels = travels.filter((travel) => travel.id !== travelId);
    setTravels(newTravels);
  };

  const travelsElement = travels.map((travel) => (
    <TravePlanCard
      key={travel.id}
      id={travel.id}
      image={travel.image}
      destination={travel.destination}
      days={travel.days}
      description={travel.description}
      totalCost={travel.totalCost}
      allInclusive={travel.allInclusive}
      onDelete={handleDelete}
    />
  ));
  return travelsElement;
};

export default TravelList;
