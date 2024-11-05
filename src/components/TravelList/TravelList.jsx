import { useState } from "react";
import "./../TravelList/TravelList.css"
import travelPlansData from "./../../assets/travel-plans.json";
import TravelPlan from "../TravelPlanCard/TravelPlanCard";

const TravelList = () => {

    const [travelPlans, setTravelPlan] = useState(travelPlansData)

    const handleTravelPlanRemoval = idToRemove => {
        const filteredTravelPlans = travelPlans.filter(eachTravelPlan => eachTravelPlan.id != idToRemove)
        setTravelPlan(filteredTravelPlans)
    }

    return (
        <div className="TravelList">
            {
                travelPlans.map(eachTravelPlan => {
                    return (

                        <TravelPlan
                            key={eachTravelPlan.id}
                            deleteTravelPlan={handleTravelPlanRemoval}
                            {...eachTravelPlan}
                        />

                    )

                })
            }
        </div>
    )
}

export default TravelList