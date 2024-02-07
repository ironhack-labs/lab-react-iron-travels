import travelPlans from "../assets/travel-plans.json";
import { useState } from "react";

function DestinationList(){


const[destinations, getDestinations] = useState(travelPlans)

const deleteDestination = descriptionID =>{
    const filteredDestinations = destinations.filter(destination =>{
        return destination.id !== descriptionID;
    })
    getDestinations(filteredDestinations);
}

function Createlabel(destination){
    if(destination.totalCost<=350){
        return <label>Great Deal</label>}
        else if( destination.totalCost>= 1500){
        return <label>Premium </label>}
        }
        
    return(
    <div>
        {destinations && destinations.map((destination=>{
            return(
                <div key={destination.id}>
                    <img src={destination.image}/> 
                    <h3>{destination.destination} ({destination.days}) </h3> 
                    <p>{destination.description}</p> 
                    <h3>Price: {destination.totalCost}€</h3>
                    {Createlabel(destination)}
                    <label>{destination.allInclusive} All Inclusive</label>
                    <button onClick={() => deleteDestination(destination.id)}>
              Delete 
            </button>
                </div>
            )
        }))}
    </div>
    )
}
export default DestinationList;