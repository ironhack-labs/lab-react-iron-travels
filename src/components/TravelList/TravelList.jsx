import { useState } from "react"
import travelPlansData from "../../assets/travel-plans.json"
import TravelCard from "../TravelCard/TravelCard"


const TravelList = () => {

    const [travells, setTravells] = useState(travelPlansData)

    const removeTravelPlan = (id) => {
        const updatedTravelPlans = travells.filter((plan) => plan.id !== id);
        setTravells(updatedTravelPlans);
    }


    return (
        <div className="TravellList">
            {
                travells.map((eachTravell) => {
                    return <TravelCard key={eachTravell.id} travelInfo={eachTravell} deleteTravel={removeTravelPlan} />


                })
            }
        </div>
    )
}
export default TravelList