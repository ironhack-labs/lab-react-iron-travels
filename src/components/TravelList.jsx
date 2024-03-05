import React, { useState } from "react";

import travelPlansData from "../assets/travel-plans.json";

export const TravelList = () => {
  let [travelArray, setTravelArray] = useState(travelPlansData);

  const deleteById = (id) => {
    setTravelArray((city) => {
      return city.filter((city) => city.id !== id);
    });
  };
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
              <div className="tags">
                <div className={tagHandler(city.totalCost)}>
                  {tagHandler(city.totalCost) == "deal"
                    ? "Great Deal"
                    : "Premium"}{" "}
                </div>
                <div className="inclusive">
                  {city.allInclusive ? "All inclusive" : ""}
                </div>
              </div>
              <div className="bold">Price: {city.totalCost} €</div>
            </div>
            <button onClick={() => deleteById(city.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

function tagHandler(cost) {
  if (cost <= 350) {
    return "deal";
  } else if (cost > 1500) {
    return "premium";
  }
}
