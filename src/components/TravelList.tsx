import React, { useState } from "react"
import travelPlansData from "../assets/travel-plans.json"
import DeleteButton from "./DeleteButton"
import TravelPlanCard from "./TravelPlanCard";


function TravelList({ addToFavorites }){
   const [travelList, setTravelList] = useState(travelPlansData);


 const main = {
  display: 'flex',
 }
 const renderList = {
    flexDirection: "column",
    alignItems: "center", 
    minHeight: "100vh", 
    padding: "20px",
    flex: '1',
 }as React.CSSProperties



const handleDelete = (planId: number) => {
  setTravelList((prevList) => prevList.filter((plan) => plan.id !== planId));
}
const handleAddToFavorites = (plan) => {
  addToFavorites(plan);
};

 return (
 <div style={main}>
  <div style={renderList}>
    
  {travelList.map((plan, index) => (
     <TravelPlanCard
     key={index}
     plan={plan}
     handleAddToFavorites={handleAddToFavorites}
     handleDelete={handleDelete}
   />
     
  ))}

  </div>
  </div>
 )
}

export default TravelList