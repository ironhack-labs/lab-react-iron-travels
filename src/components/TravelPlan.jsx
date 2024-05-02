import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";
import "./TravelPlan.css"

const TravelPlan = () => {
    return (
        <>
            <div className="container">
                <TravelPlanCard apartments={travelPlansData} />
            </div>
        </>
    )
};

export default TravelPlan;