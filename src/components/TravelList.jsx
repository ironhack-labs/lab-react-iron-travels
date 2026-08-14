
import React, { useState } from 'react';
import travelPlansData from "../assets/travel-plans.json";
import TravelCard from "../components/TravelCard";



function TravelList() {

  // 1. set up the state 

  const [travelPlanList, setTravelPlanList] = useState(travelPlansData);

  const handleDelete = (idToDelete) =>{

    const updatedTravelPlans = travelPlanList.filter((item) => item.id !== idToDelete)
    setTravelPlanList(updatedTravelPlans)
    console.log("deletefuntion")
  }



  return (
    <div id="list-wrapper">
      
      {travelPlanList.map((travelPlan) => {
        return (
          <TravelCard
            
          
            key={travelPlan.id}
            id={travelPlan.id}
            destination={travelPlan.destination}
            description={travelPlan.description}
            days={travelPlan.days}
            image={travelPlan.image}
            totalCost={travelPlan.totalCost}
            allInclusive={travelPlan.allInclusive}

            handleDelete= {handleDelete}
          />
        );
      })}


        
    </div>
  )
}

export default TravelList