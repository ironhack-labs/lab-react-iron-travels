import React from 'react'
import travelPlansData from "../assets/travel-plans.json";
import { useState } from 'react'

function TravelList() {
    const [places,setPlaces] = useState(travelPlansData)

    function handleDelete(index){
        const clone = JSON.parse( JSON.stringify(places))
        clone.splice(index,1)
        setPlaces(clone)
    }

    function labelType(totalCost){
        if(totalCost <= 350){
            return <label>Great Deal</label>
        }else if(totalCost >= 1500){
            return <label>Premium</label>
        }
       }
    function allincluded(allInclusive){
        if(allInclusive === true){
            return <label>All-inclusive</label>
        } 
    }
  return (
    <div>
        {places.map((e,index)=>{
            return(
            <div className='card' key={index}>
                <img src={e.image}></img>
                <div className='text'>
                <h2>{e.destination} {e.days}</h2>
                <p>{e.description}</p>
                <p>Price: {e.totalCost}</p>
                {labelType(e.totalCost)} 
                {allincluded(e.allInclusive)}
                <button onClick={()=>handleDelete(index)}>Delete</button>
                </div>
            </div>)
        })}
    </div>
  )
}

export default TravelList