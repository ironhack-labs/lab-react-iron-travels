import React from "react";
import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import { TravelCard } from "./TravelCard.jsx";

export const TravelList = () => {
  const [travelDetail, setTravelDetail] = useState(travelPlansData);

  const handleDelete = (traveId) => {
    const filteredTravel = travelDetail.filter((travel) => {
      return travel.id !== traveId;
    });
    setTravelDetail(filteredTravel);
  };
  return (
    <div>
      {travelDetail.map((element) => {
        return (
          <div key={element.id} className="mainContainer">
            <TravelCard
              //   we get the setter from the props and pass it here
              //   and the element is just one pet in the map loop
              handleDelete={handleDelete}
              setTravelDetail={setTravelDetail}
              element={element}
              key={element.id}
            />
          </div>
        );
      })}
      <div></div>
      <div></div>
    </div>
  );
};
