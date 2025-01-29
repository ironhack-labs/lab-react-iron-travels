import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import ListComponent from "./ListComponent";

export default function TravelList() {
  const [destinations, setDestinations] = useState(travelPlansData);

  const handleDelete = (id) => {
    const filteredDestinations = destinations.filter(
      (destination) => destination.id !== id
    );
    console.log(filteredDestinations);
    setDestinations(filteredDestinations);
  };

  return (
    <div>
      {destinations.map((destination) => (
        <ListComponent
          key={destination.id}
          destination={destination}
          onDelete={() => handleDelete(destination.id)}
        />
      ))}
    </div>
  );
}
