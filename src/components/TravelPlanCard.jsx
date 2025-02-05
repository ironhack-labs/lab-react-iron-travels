import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import '../App.css'

function TravelPlanCard (){

    const[data, setData]= useState(travelPlansData);

    const labels =(totalCost, allInclusive) => {
        return(
            <>
            {totalCost <= 350 && <span className="greatDeal"> Great Deal</span>}
            {totalCost >=1500 && <span className="premium"> Premium</span>}
            {allInclusive === true && <span className="inclusive">All Inclusive</span> }
            
            
            </>
        )
    }
    
    const deleteList = (travelId) => {
   
       const newList = data.filter((travel) => {
           console.log(travel.id !== travelId);
           return travel.id !== travelId;
       });
       setData(newList);
    }
   
       return(
   <>
   
   
   {data.map((travelObj) =>{
       return(
           <div key = {travelObj.id} className= "vacation">
               <img className= 'travel'src= {travelObj.image} alt="pic" />
   
               <div className="content">     
                 <h3> {travelObj.destination} ({travelObj.days} Days)</h3>
                 <p> {travelObj.description} </p>
                 <p> <b> Price:</b> {travelObj.totalCost} € </p>
                 {labels(travelObj.totalCost,travelObj.allInclusive)}
                 <p > <button className="btn" onClick={() => {deleteList(travelObj.id)}}> Delete </button> </p>
                </div>
            
           </div>
       )
   })}
   </>
   
   
       )
}

export default TravelPlanCard;