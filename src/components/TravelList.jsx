import { useState } from "react"
import travelPlansData from "../assets/travel-plans.json"
import TravelCard from "./TravelCard"

const TravelList = () => {

    const [travelPlans, setTravelPlans] = useState(travelPlansData)

    return (
        <div className="TravelList">
            {
                travelPlans.map(eachTravel => {
                    return (
                        <TravelCard key={eachTravel.id} {...eachTravel} />
                    )
                })
            }
        </div>
    )
}
export default TravelList 