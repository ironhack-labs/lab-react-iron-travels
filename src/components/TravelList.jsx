import React from "react";
import travelplans from "../travelplans.json";
import { useState } from "react";

const TravelList = () => {
  const [travels, setTravels] = useState(travelplans);

  const deleteTrip = (tripID) => {
    const filteredTrips = travels.filter((trip) => {
      console.log("I MADE IT! ====>>>>" + tripID);
      console.log("WHO AM I  =====>>>>" + trip.id);
      console.log(trip.id !== tripID);
      return trip.id !== tripID;
    });

    setTravels(filteredTrips);
  };

  return (
    <>
      {travels.map((element) => {
        return (
          <div key={element.id} className="travels">
            <img src={element.image} />
            <span>
              <p>
                {element.destination} {"("}
                {element.days} Days{")"}
              </p>
              <p>
                <i>{element.description}</i>
              </p>
              <p>
                <b>Price:</b> {element.totalCost} €
              </p>
              <p>
                {element.totalCost > 1500
                  ? "Premium Label"
                  : element.totalCost < 350
                  ? "Great Deal Label"
                  : ""}{" "}
                {element.allInclusive === true ? "All Inclusive Label" : ""}
              </p>
              <button
                onClick={() => deleteTrip(element.id)}
                className="btn-delete"
              >
                Delete
              </button>
            </span>
          </div>
        );
      })}
    </>
  );
};
export default TravelList;
