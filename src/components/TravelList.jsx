import travelPlansData from "../data/travel-plans.json";
import { useState } from "react";

export const TravelList = () => { 
    // create a state to store travelPlansData with the setter
    // Firt the State
  const [travelDestination, setTravelDestination] = useState(travelPlansData)
    // Then the functions of the component
    console.log(travelDestination);

    function handleDelete(myId){
        const filteredArray = travelDestination.filter(destination => destination.id !== myId);
        setTravelDestination(filteredArray);
    }
    //
  return (
    <div id="list-container">
       {/* /* Do a map with the variable containing all the destination infomations / */}
       {travelDestination.map(destination => (
        <article key={destination.id} className="card">
          <img src ={destination.image} alt={destination.destination} className="card-image"/>
          <div className="text-content">
            <h3 className="card-title">{destination.destination} {destination.days}</h3>
            <p className="card-subtitle">{destination.description}</p>
            <p><span className="bold">Price:</span> {destination.totalCost} €</p>
            {/* here we add conditional badge/tag */}
            {destination.totalCost <= 350 && <span className="tag">Great Deal</span>}
            {destination.totalCost >= 1500 && <span className="tag">Premium</span>}
            {destination.allInclusive && <span className="tag">All Inclusive</span>}
          <div className="actions-container">
            <button onClick={()=>{handleDelete(destination.id)}}> Delete</button>
          </div>
          </div>
          
        </article>

        
        
       ))
       }
    </div>
  )
}

