import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

function TravelList (){

    const [travelPlan, setTravelPlan] =useState(travelPlansData);
    return(
        <div className="list">
            {travelPlan.map((elmObj) => {
                return (
               <div key= {elmObj.id}>

            <TravelPlanCard plan={elmObj} />
           
            


               </div>

                );
            })}
               
        
        
        
        </div>
    )
}

    


export default TravelList;