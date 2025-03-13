import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";
import TravelPlanCard from "./TravelPlanCard";

const TravelList = () => {
    const [travelPlansDataState, setTravelPlansDataState] = useState(travelPlansData);
    
    function handleDelete(thePlanId) {
        const filteredPlans = travelPlansDataState.filter((onePlan)=>{
            if (onePlan.id !== thePlanId) {
                return true;                
            } else {
                return false};
        })
        setTravelPlansDataState(filteredPlans)
    }

  return (
    <div className = "TravelList">
        {travelPlansDataState.map((onePlan)=>{
            return (
                <TravelPlanCard key = {onePlan.id} onePlan = {onePlan} handleDelete = {handleDelete}/>
            )
        })}
       

       
    </div>
  )
}

export default TravelList

        {/* <div>{travelPlansData[0].allInclsuive}</div>
        <div>{travelPlansData[0].parts.name}</div>
        <dialog>{travelPlansData[0].parts.description}</dialog>
        <dialog>{travelPlansData[0].parts.cost}</dialog> */}