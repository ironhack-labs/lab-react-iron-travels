import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);
  function handleDelete(id) {
    const filteredElements = travelPlans.filter(
      (oneElement) => oneElement.id !== id
    );
    setTravelPlans(filteredElements);
  }
  return (
    <div>
      {travelPlans.map((element) => {
        return (
          <div className="card">
            <div className="image-card">
              <img src={element.image}></img>
            </div>
            <div className="content-card">
              <h3>{element.destination}</h3>
              <p>{element.description}</p>
              <p>Price: {element.totalCost}</p>
              <div className="all-deals">
                {element.totalCost <= 350 && (
                  <div className="deal">Great Deal</div>
                )}
                {element.totalCost <= 1500 && (
                  <div className="deal">Premium</div>
                )}
                {element.allInclusive && (
                  <div className="deal">All Inclusive</div>
                )}
              </div>
              <br></br>
              <button
                className="delete"
                onClick={() => {
                  handleDelete(element.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TravelList;
