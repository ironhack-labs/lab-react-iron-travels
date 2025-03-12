import travelPlansData from "../assets/travel-plans.json";
import React, {useState} from 'react';
import { TravelPlanCard } from "./TravelPlanCard";


export const TravelList = () => {
    const [travelPlans, setTravelPlansData] = useState(travelPlansData);
    const [favoriteTravelPlans, setFavoriteTravelPlans] = useState([]);
    const deleteTravel = travelId => {
        const filteredTravel = travelPlans.filter( travel => {
            return travel.id !== travelId;
        })
    
        setTravelPlansData(filteredTravel); // Update the state with filteredTravel
    }
    const favoriteTravel = travelId => {
        deleteTravel(travelId);
        const filteredFavoriteTravel = travelPlans.filter( travel => {
            return travel.id === travelId;
        })
        setFavoriteTravelPlans(filteredFavoriteTravel);
    
    }
  return (
    <>
        
        {travelPlans.map(oneTravel => 
        {
            return (
                <TravelPlanCard plan={oneTravel} deleteOne={deleteTravel} favorite={favoriteTravel}/>
                
        
        )
        })}
    </>
  )
}
