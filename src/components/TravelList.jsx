import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
  const [travelData, setTravelData] = useState(travelPlansData);
  const deleteItem = (itemId) => {
    const filteredItems = travelData.filter((data) => {
      return data.id !== itemId;
    });

    setTravelData(filteredItems);
  };

  return (
    <div>
      {travelData.map((data) => {
        return (
          <TravelPlanCard key={data.id} plan={data} deleteItem={deleteItem} />
        );
      })}
    </div>
  );
}

export default TravelList;
