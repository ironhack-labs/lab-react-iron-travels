import React, { useState } from 'react'
import travelPlansData from "../assets/travel-plans.json"
function TravelList() {
    const [travels, setTravels] = useState(travelPlansData);
    function handleDelete(id){
        const filteredArray = travels.filter((travel) =>{
            if(travel.id !== id){
                return true;
            }else{
                return false;
            }
        })
        setTravels(filteredArray)
    }

  return (
    
     travels.map((travel)=>{
        return(
        <main className='travel-card'>
            <img src={travel.image} alt='destination_image'/>
            <section className='travel-description'>
                <h2>{`${travel.destination} (${travel.days} Days)`}</h2>
                <p><span><em>{travel.description}</em></span></p>
                <p><span className='span-h5'>Price: </span>{`${travel.parts[0].cost} €`}</p>
                <article className='labels'>
                {travel.parts[0].cost <=350 ? <label id='great-deal'>Great Deal</label>: travel.parts[0].cost >=1500 ? <label id='premium'>Premium</label> : <label></label>}
                {travel.allInclusive ? <label id='all-inclusive'>All-Inclusive</label>:<label></label>}
                </article>
                <button onClick={()=>{
                    handleDelete(travel.id)
                }}>Delete</button>
            </section>
        </main>
        )

    })
   
  )
}

export default TravelList