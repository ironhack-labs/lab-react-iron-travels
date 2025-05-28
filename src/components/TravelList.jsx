import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
    const [data, setData] = useState(travelPlansData);
    function handleDelete(id){
         const deleteList = data.filter((newTrip) =>{
                        if(id !== newTrip.id){
                            return true
                        }else{
                            return false
                        }
                    })
        setData(deleteList);
                  }
  return (
    <div>
      
      {data.map((trip)=>{
        return (<div className="trip-card">

        <img id="image" src={trip.image}/> 
        <div className="info"> 
        <h2>{trip.destination}</h2> 
        <h3> ({trip.days} Days)</h3>
        <br></br>
        <h5 id="description"> {trip.description}</h5>
        <br></br>
        <h4>Price: {trip.totalCost}€</h4>
        <h4>{trip.totalCost <= "350" ? "Great Deal" : trip.totalCost >="1500" ? "Premium" : null }</h4>
        <h4>{trip.allInclusive && "All-Inclusive"}</h4>
        <button onClick={() =>{
                    handleDelete(trip.id)
                }}>delete</button>
        </div>  
         </div>)
       
      })}
    </div>
  )
}

export default TravelList
