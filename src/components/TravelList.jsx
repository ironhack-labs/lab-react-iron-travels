import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {

    const [travelListDisplay, setTravelListDisplay] = useState(travelPlansData);

    const deleteData = (travelDataId) => {
        const newList = travelListDisplay.filter((travelData) => {
            return (travelDataId !== travelData.id)
        })

        setTravelListDisplay(newList)
    }

    return (
        <div>
            {travelListDisplay.map((travelObj) => (
                <TravelPlanCard key={travelObj.id} plan={travelObj} deleteData={deleteData} />
            ))}

        </div>
    )
}

export default TravelList