import { useState } from "react";
import travelPlansData from "../../assets/travel-plans.json";
import TravelPlanCard from "./travel-plan-card/travel-plan-card";

function TravelList() {
    const [travel, setTravel] = useState(travelPlansData);

    const handleDeleteButton = (id) => {
        const updatedTravel = travel.filter(plan => plan.id !== id);
        setTravel(updatedTravel);  
    };

    return (
        <div>
            <ul className="list-unstyled">
                {travel.map((plan) => (
                    <TravelPlanCard
                        key={plan.id}
                        plan={plan}  
                        handleDeleteButton={handleDeleteButton}
                        />
                ))}
            </ul>
        </div>
    );
}

export default TravelList;

