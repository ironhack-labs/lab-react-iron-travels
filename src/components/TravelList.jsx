import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

export default function TravelList () {
    const[destinationsToDisplay, setDestinationsToDisplay] = useState(travelPlansData);

    const deleteDestination = (destinationId) => {
        const newList = destinationsToDisplay.filter((elm) => {
            return elm.id !== destinationId;
        });
        setDestinationsToDisplay(newList);
    }

    return (
        <div>
    {destinationsToDisplay.map((element) => {
       
        return (
            <div key={element.id} className="destination">
                <img src={element.image} className="destination__image"/>
                
                
            <div className="destination__text">
                <h2>{element.destination} </h2>
                <p> {element.description} </p>
                <p> Price: $ {element.totalCost} </p>
                {element.totalCost < 350 ? <p>Great Deal</p> : (element.totalCost > 1500 ? <p>Premium</p> : null)} 
                <button onClick={() => {deleteDestination(element.id)}}>Delete</button>
            </div>
            </div>
        )
            
        
    })}
    </div>
    )
}
