import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

function TravelList (){
    const [travelPlans, setTravelPlans] = useState(travelPlansData);

    const handleDelete = (id) =>{
        const updatedPlans = travelPlans.filter(plan => plan.id !== id);
        setTravelPlans(updatedPlans)
      }

      return (
        <div>
          <h2>Available Travel Plans:</h2>
          {travelPlans.map((plan) => (
            <TravelPlanCard
              key={plan.id}
              plan={plan}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      );
    }

export default TravelList