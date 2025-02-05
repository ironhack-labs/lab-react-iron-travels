import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";
function TravelList() {
  const [listOfTravels, setListOfTravels] = useState(travelPlansData);
  const deleteList = (listId) => {
    const newList = listOfTravels.filter((list) => {
      return list.id !== listId;
    });
    setListOfTravels(newList);
  };
  return (
    <div className="TravelList">
      {listOfTravels.map((plan) => {
        return (
          <TravelPlanCard key={plan.id} plan={plan} deleteList={deleteList} />
        );
      })}
    </div>
  );
}

export default TravelList;
