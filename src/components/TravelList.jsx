import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard  from "./TravelPlanCard";
import FavouriteCard from "./FavouriteCard";

const TravelList = () => {

  const [travelPlans, setTravelPlan]  = useState(travelPlansData);
  const [likedPlans, setLikedPlan] = useState([]);

  return (
    <>
      <div className="travel-page">
        <div className="travel-plans">
          {
            travelPlans.map((plan) =>{
              return (<TravelPlanCard  key = {plan.id} plan = {plan} 
                      travelPlans = {travelPlans} setTravelPlan = {setTravelPlan} 
                      setLikedPlan = {setLikedPlan}/>)
            })
          }
        </div>

        {(likedPlans && likedPlans.length > 0) &&
          <div className="fav">
            <h3>Favorites</h3>   
            {
              likedPlans.map((plan) =>{
                return (<FavouriteCard key = {plan.id} plan = {plan}/>);
              })
            }       
          </div>
        }
      </div>      
    </>
  )
}

export default TravelList