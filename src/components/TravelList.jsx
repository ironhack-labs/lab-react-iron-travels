import travelPlansData from "../assets/travel-plans.json";
import React, { useState } from 'react'

const TravelList = () => {
  const [travelPlans, setTravelPlans]=useState(travelPlansData)
  
  const clickToRemove=(id)=>{
    const filtredPlan = travelPlans.filter((item)=>{
    return item.id !==id
  })
    setTravelPlans(filtredPlan)
  }
  return (
    <div className="tarvel-list">
       <div style={{display:"flex", flexDirection:"column", gap:"20px"}}>
         {travelPlans.map((travelplan)=>(
         <div style={{display:"flex",border:"1px solid black",padding:"40px 60px 40px 30px",gap:"10px"}}>
            <img src={travelplan.image} alt="" style={{width:"60%", height:"100%"}} />
            <div style={{display:"flex", flexDirection:"column",gap:"10px",marginTop:"-25px"}}>
                <h1 style={{fontSize:"30px"}}>{travelplan.destination}({travelplan.days} Days)</h1>
                <p>{travelplan.description}</p>
                <p>Price:{travelplan.parts[0].cost}</p>
                <div style={{display:"flex",flexDirection:"row", gap:"10px",justifyContent:"center"}}>
                  {travelplan.totalCost<=350 ? <p style={{backgroundColor:"green",padding:"2px"}}>Great Deal</p>:<p style={{backgroundColor:"blue",padding:"2px",color:"white"}}>Premium</p>}
                  {travelplan.allInclusive && <p style={{backgroundColor:"blue",padding:"2px",color:"white"}}>All_Inclusive</p>}
                </div>
                <div><button onClick={()=>{clickToRemove(travelplan.id)}} style={{backgroundColor:"gray",padding:"10px"}}>Delete</button></div>
                
            </div>
         </div>
       ))}
       </div>
    </div>
  )
}

export default TravelList