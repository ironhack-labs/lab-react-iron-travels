import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";
import { useState } from "react";


function TravelList() {
    const [travelPlans, setTravelPlans] = useState(travelPlansData);
  
    const deleteTravel = (travelId) => {
      const newList = travelPlans.filter((travelObj) => travelId !== travelObj.id);
      setTravelPlans(newList);
    };
  
    return (
      <section className="TravelList">
        {travelPlans.map((travelDetails) => (
          <TravelPlanCard key={travelDetails.id} plan={travelDetails} onDelete={deleteTravel} />
        ))}
      </section>
    );
  }
  
  export default TravelList;