import travelPlansData from "../assets/travel-plans.json";
import React, { useState } from 'react'
import TravelPlanCard from "./TravelPlanCard";


const TravelList = () => {
    const [travelData, setTravelData] = useState(travelPlansData)
    //console.log(travelData)
    function handleDeleteTravel(travelId){
        const filteredCards = travelData.filter((card)=>{
          if(card.id !== travelId){
            return true
          }
        })
        setTravelData(filteredCards)
      }

  return (
    <div>
        <div>      
        {travelData.map((plan) => (
        <TravelPlanCard key={plan.id} plan={plan} onDelete={handleDeleteTravel} />
      ))}
      </div>  
      <div>

      </div>
        </div>
)}

export default TravelList