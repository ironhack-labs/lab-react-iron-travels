import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {

  const [ travelPlans, setTravelPlans ] = useState(travelPlansData)

  const handleDelete = (index) => {
    const dataClone = travelPlans.slice(0);
    dataClone.splice(index, 1);

    setTravelPlans(dataClone);
  }

  return (
    <div className="container">
      {travelPlans.map((plan) =>
        <TravelPlanCard plan={plan} handleDelete={handleDelete} />
      )}
    </div>
  )
}

export default TravelList