import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

export default function TravelList() {

    const [travels, setTravels] = useState(travelPlansData)

    const deleteButton = (id) => {
        const filteredTravels = travels.filter((travel) => {
            return travel.id !== id
        })
        setTravels(filteredTravels)
    }

    return (
            <div id="container">
                {travels.map((travel) => (
                    <TravelPlanCard key={travel.id} plan={travel} deleteButton={deleteButton}/>
                ))}
            </div>
    )
}