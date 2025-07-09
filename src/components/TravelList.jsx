import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
  const [listToDisplay, setList] = useState(travelPlansData);

  const changeList = (planId) => {
    const newList = listToDisplay.filter((travelPlan) => {
      return travelPlan.id !== planId;
    });

    setList(newList);
  };

  const [favList, setfavList] = useState([]);
  const addFavorite = (planId) => {
    const newList = listToDisplay.filter((travelPlan) => {
      return travelPlan.id === planId;
    });
    setfavList(newList);
  };

  return (
    <div className="favItem">
      <div>
        {listToDisplay.map((plan) => (
          <TravelPlanCard
            key={plan.id}
            plan={plan}
            onDelete={changeList}
            onFavorite={addFavorite}
          />
        ))}
      </div>
      <div>
        {favList.map((plan) => (
          <TravelPlanCard
            key={plan.id + "v"}
            plan={plan}
            onDelete={changeList}
            onFavorite={addFavorite}
          />
        ))}
      </div>
    </div>
  );
}

export default TravelList;
