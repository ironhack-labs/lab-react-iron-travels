import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";
import "./TravelList.css"
import TravelListCard from "./TravelListCard";

function TravelList(){

    const [travelPlans, setPlans] = useState([...travelPlansData])

    function remove(id){
        let filteredPlans = travelPlans.filter((plan) => {
            return plan.id !== id
        })
        setPlans(filteredPlans)
    }

    return ( 
    
        <div className="cards">
            {travelPlans.map((location) => (
                <TravelListCard key={location.id} location={location} remove={remove} />
            ))}
        </div>
    )
}

export default TravelList;