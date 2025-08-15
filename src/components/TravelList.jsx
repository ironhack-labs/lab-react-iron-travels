import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react"; 
import TravelPlanCard from "./TravelPlanCard"; 

function TravelList() {
    const [travels, setTravels] = useState(travelPlansData)
    
    const deleteItem = travelId => {
        const filteredItems = travels.filter(item => {
            return item.id !== travelId; 
        })
        setTravels(filteredItems); 
    }
    return (
        <ul>
            {travels.map((travel) => {
                return <TravelPlanCard key ={travel.id} travel = {travel} clickToDelete={ deleteItem }/>
            })}
        </ul>
    );
}

export default TravelList