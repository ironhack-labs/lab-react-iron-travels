import { useState } from "react"
import  travelPlansData from "../assets/travel-plans.json"
import "../styles/TravelList.css"

function TravelList(){
    const [travels , setTravels]= useState(travelPlansData);
    const deleteTravel = travelId=>{
        const filteredTravel= travels.filter(travel =>travel.id !== travelId)
        setTravels(filteredTravel);
    }
    return(
        <>
        {travels.map((travel)=>{
            return(
                
                <div key={travel.id} className="cardTravel">

<div className="image-container">
                    <img src={travel.image} alt="picture"/>

                    </div>
                    <div className="description-container">

                    <h2>{travel.destination}({travel.days})</h2>
                    <p><i>{travel.description}</i></p>
                    <p>Price:{travel.totalcost}€</p>
                    {travel.totalCost<=350 && <label>Great Deal</label>}
                    {travel.totalCost>=1500 && <label>Premium</label>}
                    {travel.allInclusive && <label htmlFor="">All inclusive</label>}

                    <button onClick={()=> deleteTravel(travel.id)}>Delete</button>
                    </div>
                    
                </div>
            )

        })}
        </>
    )

}
export default TravelList;