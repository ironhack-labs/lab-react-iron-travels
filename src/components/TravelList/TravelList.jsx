import { useState } from "react"
import travelPlansData from "../../assets/travel-plans.json"
import TravelRow from "../TravelRow/TravelRow"

function TravelList() {
    const [originalList, setTravelList] = useState(travelPlansData)

    return (
        <div className="TravelList">
            <h1>Soy la travel List</h1>
            <hr />
            {originalList.map(eachTravel => {
                return <TravelRow TravelInfo={eachTravel} key={eachTravel.id} />
            })}
        </div>
    )
}

export default TravelList;