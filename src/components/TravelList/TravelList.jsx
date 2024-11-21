import { useState } from "react";
import TravelCard from "./TravelCard/TravelCard";
import travelPlansData from "../../assets/travel-plans.json"
import "./TravelList.css"

const TravelList = () => {

    const [travelData, setTravelData] = useState(travelPlansData)

    return (
        <div className="TravelList">

            {travelData.map(travel => {
                return <TravelCard travelInfo={travel} key={travel.id} />
            })
            }


        </div>

    )
}

export default TravelList