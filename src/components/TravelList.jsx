import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import "./TravelList.css";

export default function TravelList() {
  const [destinations, setDestinations] = useState(travelPlansData);

  const clickToDelete = (id) => {
    const filteredDestinations = destinations.filter(
      (destination) => destination.id !== id
    );

    setDestinations(filteredDestinations);
  };

  return (
    <div className="list">
      {destinations.map((destination) => (
        <div key={destination.id}>
          <img src={destination.image} alt={destination.destination} />
          <h2>
            {destination.destination} ({destination.days} Days)
          </h2>
          <p>{destination.description}</p>
          <p>Price: {destination.totalCost} €</p>
          {destination.totalCost <= 350 && <p>Great Deal</p>}
          {destination.totalCost >= 1500 && <p>Premium</p>}
          {destination.allInclusive && <p>All Inclusive</p>}
          <button
            onClick={() => clickToDelete(destination.id)}
            className="btn-delete"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
