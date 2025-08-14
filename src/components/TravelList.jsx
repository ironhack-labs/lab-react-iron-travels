import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";
import TravelPlanCard from "./TravelPlanCard";

function TravelList () {
    const [plans, setPlans] = useState(travelPlansData);

    const clickToDelete = (id) => {
        setPlans(plans.filter(plan => plan.id !== id));
    }
    return (
        <div className="travel-list">
            {plans.map((plan) => (
                <TravelPlanCard 
                    key={plan.id}
                    plan={plan}
                    onDelete={clickToDelete}
                />
            ))}
        </div>
    );
}

export default TravelList;