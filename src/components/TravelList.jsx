import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import "./TravelList.css";
import TravelPlanCard from "./TravelPlanCard";

function dealOrNoDeal(totalCost) {
  if (totalCost <= 350) {
    return <span className="green">Great Deal</span>;
  } else if (totalCost >= 1500) {
    return <span className="blue">Premium</span>;
  } else {
    return null;
  }
}


function TravelList() {
  const [data, setData] = useState(travelPlansData);

  const handleDelete = (id) => {
    const updatedTravelPlans = data.filter((item) => item.id !== id);
    setData(updatedTravelPlans);
  };

  return (
    <div className="travel-list">
      {data.map((item) => (
      <TravelPlanCard key={item.id} item={item} handleDelete={handleDelete} dealOrNoDeal={dealOrNoDeal} />
      ))}
    </div>
  );
}



export default TravelList;
