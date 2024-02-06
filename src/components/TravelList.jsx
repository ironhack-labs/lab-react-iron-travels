import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";
import Favorites from "./Favorites";

function TravelList () {
        const [travelPlans, setTravelPlans] = useState(travelPlansData);
        const [favorites, setFavorites] = useState([]);

        const handleDelete =(id) => {
            const updateTravelPlans = travelPlans.filter((plan) => plan.id !==id);
            setTravelPlans(updateTravelPlans);
        }

        const handleFavorite = (plan) => {
            setFavorites((prevFavorites) => [...prevFavorites, plan]);
        }
    
    return (
        <div className="TravelBox">
            <div className="TravelListContainer">
            {travelPlans.map((plan) => 
            ( 
            <TravelPlanCard key={plan.id} plan={plan} onDelete={handleDelete} onFavorite={handleFavorite} />
            ))}
        </div>
       
        <Favorites favorites={favorites} />
        </div>
    )
            }
export default TravelList;