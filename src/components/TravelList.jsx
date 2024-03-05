import React, { useState } from "react";

import travelPlansData from "../assets/travel-plans.json";

export const TravelList = () => {
  let [travelArray, setTravelArray] = useState(travelPlansData);

  return (
    <div>
      {/* <img src="./assets/logo.png" />
      <h1>Iron Travels</h1>
      <h3>Tailored Travel Plans for Ironhackers</h3> */}
      <ul>
        {travelArray.map((city, index) => (
          <li key={index}>
            {city.destination}, {city.days}, {city.decription}
            {city.totalCost}
          </li>
        ))}
      </ul>
    </div>
  );
};
