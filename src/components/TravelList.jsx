import { TravelPlanCard } from "./TravelPlanCard"
import travelPlans from "../assets/travel-plans.json"

export function TravelList () {
    return (
        <div className="TravelList">
            <TravelPlanCard plan={travelPlans}/>
        </div>
    )
}