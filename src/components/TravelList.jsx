import React from "react";
import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

function TravelList() {
  const [travelData, setTravelData] = useState(travelPlansData);

  const handleDelete = (index) => {
    const newArr = travelData.filter((_, i) => i !== index);
    setTravelData(newArr);
  };

  return (
    <div>
      {travelData.map((destination, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "row",
            borderWidth: 1,
            borderColor: "black",
            borderStyle: "solid",
            padding: "20px",
            marginTop: "20px",
          }}
        >
          <img
            style={{ maxWidth: "350px", maxHeight: "300px" }}
            src={destination.image}
            alt={destination.destination}
          />
          <div>
            <h2>{`${destination.destination}  (${destination.days} days)`}</h2>
            <p>{destination.description}</p>
            <p>
              Price: <span>{destination.totalCost}</span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              {destination.totalCost <= 350 && (
                <div style={{ backgroundColor: "blue", color: "white" }}>
                  Great Deal
                </div>
              )}
              {destination.totalCost > 1500 && (
                <div style={{ backgroundColor: "green", color: "white" }}>
                  Premium
                </div>
              )}
              {destination.allInclusive && (
                <div style={{ backgroundColor: "blue", color: "white" }}>
                  All Inclusive
                </div>
              )}
            </div>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TravelList;
