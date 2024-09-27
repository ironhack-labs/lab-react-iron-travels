import React from "react";
import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [travelList, setTravelList] = useState(travelPlansData);

  const handleRemoveTravel = (oneTravel) => {
    let TravelListClone = JSON.parse(JSON.stringify(travelList))
    TravelListClone.splice(oneTravel, 1)
    setTravelList(TravelListClone)
  }

  return (
    <div>
      {travelList.map((eachTravel) => {
        return (
          <div key={eachTravel.id}>
            <img
              src={`${eachTravel.image}`}
              alt={`${eachTravel.destination}`}
              width="150px"
            />
            <h2>
              {eachTravel.destination} {`(${eachTravel.days} days)`}
            </h2>
            <p>{eachTravel.description}</p>
            <p>Price: {`(${eachTravel.totalCost}€)`} </p>
            <label> {eachTravel.totalCost <= 350 ? "Great Deal" : undefined } </label>
            <label> {eachTravel.totalCost >= 1500 ? "Premium" : undefined } </label>
            <label> {eachTravel.allInclusive === true ? "All Inclusive" : undefined } </label>
            <button onClick={handleRemoveTravel}>Delete</button>
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default TravelList;
