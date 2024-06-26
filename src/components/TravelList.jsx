import travelPlansData from "../assets/travel-plans.json";
import React, { useState } from "react";

function TravelPlans() {
  const [functionData, setFunctionData] = useState(travelPlansData);

  const clickHandler = (id) => {
    const filteredData = functionData.filter(
      (destination) => destination.id !== id
    );
    setFunctionData(filteredData);
  };

  return functionData.map((eachDestination) => {
    return (
      <div
        key={eachDestination.id}
        id={eachDestination.id}
        className="destination"
      >
        <img
          src={eachDestination.image}
          alt="destination image"
          className="destinationImage"
        />
        <div className="content">
          <h3>{`${eachDestination.destination} (${eachDestination.days} Days)`}</h3>
          <p>
            <em>{eachDestination.description}</em>
          </p>
          <p>
            <strong>Price: </strong>
            {eachDestination.totalCost} €
          </p>
          {eachDestination.totalCost <= 350 ? (
            <label htmlFor="greatDeal" className="greenLabel">
              Great Deal
            </label>
          ) : (
            <></>
          )}
          {eachDestination.totalCost >= 1500 ? (
            <label htmlFor="premium" className="blueLabel">
              Premium
            </label>
          ) : (
            <></>
          )}
          {eachDestination.allInclusive ? (
            <label htmlFor="allInclusive" className="blueLabel">
              All-inclusive
            </label>
          ) : (
            <></>
          )}
          <div className="buttonsDiv">
            {" "}
            <button onClick={() => clickHandler(eachDestination.id)}>
              Delete
            </button>
            <button>♡</button>
          </div>
        </div>
      </div>
    );
  });
}

export default TravelPlans;
