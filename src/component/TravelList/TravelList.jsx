import './../TravelList/TravelList.css'
import travelPlansData from "./../../assets/travel-plans.json";
import { useState } from "react";
import TravelCard from "../TravelCard/TravelCard";

const TravelList = () => {

    const [travelPlan, setTravelPlan] = useState(travelPlansData)

    const deleteTravelPlan = idToDelete => {

        const filteredApartments = travelPlan.filter(elm => elm.id != idToDelete)

        setTravelPlan(filteredApartments)
    }

    return (

        <div className="TravelList">

            {travelPlan.map(elm => (
                <TravelCard
                    key={elm.id}
                    id={elm.id}
                    destination={elm.destination}
                    days={elm.days}
                    image={elm.image}
                    totalCost={elm.totalCost}
                    description={elm.description}
                    deleteTravelPlan={deleteTravelPlan}
                    {...elm}
                />
            ))}

        </div>

    )

}

export default TravelList