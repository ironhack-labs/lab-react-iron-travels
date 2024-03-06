import "./TravelList.css";
import { useState } from "react";

import travelPlansData from "../assets/travel-plans.json";

export const TravelList = () => {
  const [travelListState, setTravelListState] = useState(travelPlansData);

  const deletePlan = (id) => {
    setTravelListState(travelListState.filter((element) => element.id !== id));
  };
  return (
    <div className="card-list">
      {travelListState.map((element) => {
        return (
          <div className="destination-card" key={element.id}>
            <img className="img" src={element.image}></img>
            <div className="text">
              <h3 className="name-days">
                {element.destination} ({element.days} Days)
              </h3>
              <div>{element.description}</div>
              <div>
                <span>Price: </span>
                {element.totalCost} €
              </div>
              {element.totalCost <= 350 ? (
                <button>Great Deal</button>
              ) : (
                <button>Premium</button>
              )}
              <button onClick={() => deletePlan(element.id)}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
