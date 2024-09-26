import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import "./TravelList.css";
import TravelPlanCard from "./TravelPlanCard";

const TravelList = () => {
  const [travelList, setTravelList] = useState(travelPlansData);

  const deleteListItem = (itemId) => {
    setTravelList(travelList.filter((item) => item.id != itemId));
  };

  return (
    <div className="travel-list">
      {travelList.map((currentListItem) => {
        return (
          <div key={currentListItem.id} className="card">
            <TravelPlanCard
              plan={currentListItem}
              onDeleteClick={() => deleteListItem(currentListItem.id)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TravelList;
