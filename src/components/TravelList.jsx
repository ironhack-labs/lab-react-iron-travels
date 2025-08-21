import React from "react";
import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
    const [travelPlans, setTravelPlans] = useState(travelPlansData);
    
    return (
        <div>
            {travelPlans.map((plan) => (
                <TravelPlanCard key={plan.id} plan={plan} />
            ))}
        </div>
    );
}

export default TravelList;