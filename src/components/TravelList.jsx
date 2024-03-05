import React, { useState } from "react";

import travelPlansData from "../assets/travel-plans.json";

export const TravelList = () => {
  let [travelArray, setTravelArray] = useState(travelPlansData);

  return (
    <div className="tripContainer">
      <ul>
        {travelArray.map((city, index) => (
          <li className="list" key={index}>
            <img className="photos" src={city.image} />
            <div className="display">
              <div className="bold">
                {city.destination}, ({city.days} Days)
              </div>
              <div className="italics">{city.description}</div>
              <div className="bold">Price: {city.totalCost} €</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
