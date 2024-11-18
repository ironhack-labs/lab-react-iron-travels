import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";
import "./TravelList.css";

function TravelList () {
    const [travels, setTravels] = useState(travelPlansData);
    return (
        <>
        {travels.map((travel, index) => {
            return <div key = {index} className = "travel">
                <img width = "100px" src={travel.image} alt = "city picture"/>
                <h2>{travel.destination} ({travel.days} days)</h2>
                <div>{travel.description}</div>
                <div> Price: {travel.parts[0].cost}€</div>
                
                
                </div> }
            )}
            
        </>
    )
}

export default TravelList