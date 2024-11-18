import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";
import "./TravelList.css";

function TravelList () {
    const [travels, setTravels] = useState(travelPlansData);

    function deleteTravel(travelId) {   /* Here travelId = travel.id , as we give this parameter in line 29 */
        const filteredTravels = travels.filter(travel => {
            return travel.id !==travelId;
        });
        setTravels(filteredTravels);

    }
    return (
        <>
        {travels.map((travel, index) => {
            return <div key = {index} className = "travel">
                <img width = "100px" src={travel.image} alt = "city picture"/>
                <h2>{travel.destination} ({travel.days} days)</h2>
                <div>{travel.description}</div>
                <div> Price: {travel.totalCost}€</div>    
{/* ITERATION 2 */}
                {travel.totalCost <= 350 && <label id="deal">Great Deal!</label>}      
                {travel.totalCost >= 1500 && <label id="premium">Premium</label>} 
                {travel.allInclusive && <label id="allInclusive">All inclusive!</label>}  

{/* ITERATION 3 */}
                <button onClick = {()=> deleteTravel(travel.id)}>Delete</button>
                </div> }
            )}
            
        </>
    )
}

export default TravelList