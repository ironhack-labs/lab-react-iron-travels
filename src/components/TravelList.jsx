import TravelPlanCard from "./TravelPlanCard";
import { useState } from "react";
import travelPlansData from '../assets/travel-plans.json';

function TravelList(){
  const [travelCard, setTravelCard] = useState(travelPlansData);
  function removeCard(id){
      const updatedTravelsCard = travelCard.filter(card => card.id !== id);
      setTravelCard(updatedTravelsCard);
    }
  
    return travelCard.map((plan) => {
      return(
        <TravelPlanCard 
        key={plan.id}
        plan = {plan}
        deleteTravelCard ={removeCard}
        />
      )
    })
  }



export default TravelList;



