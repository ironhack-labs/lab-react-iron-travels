import "./TravelList.css";
import React from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  return (
    <div className="TravelDestination">
      {travelPlansData.map((tripDetails) => {
        return (
          <div className="trips">
            <img className="foto" src={tripDetails.image} alt="Foto"></img>
            <h2 className="text">
              {tripDetails.destination}({tripDetails.days})
            </h2>
            <p className="text">{tripDetails.description}</p>
            <p className="text">
              <b>Price: </b>
              {tripDetails.totalCost} €
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default TravelList;
