import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
    const [plans, setPlans] = useState(travelPlansData);

    const handleDelete = (id) => {
        const filteredPlans =
            plans.filter((plan) => plan.id !== id);

        setPlans(filteredPlans);
    }

    return (
        <div>
            {plans.map((plan) => {

                return (
                   <TravelPlanCard
                    key={plan.id}
                    plan={plan}
                    handleDelete={handleDelete}
                   />
                );
            })}
        </div>
    );
}4

export default TravelList;