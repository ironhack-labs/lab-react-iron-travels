import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";



function TravelList () {

    const [travelsToDisplay, setTravelsToDisplay] = useState(travelPlansData)

    function deleteTravels (travelId) {
        const newTravels = travelsToDisplay.filter((travelObj) => {
            return travelObj.id !== travelId; 
        })
        setTravelsToDisplay(newTravels);
    }

    return (
        <div className="boxes">
            {travelsToDisplay.map((element) => {
               return (
                <div className="destination">
                    <img src={element.image} />
                    <div className="destinationInfo">
                        <h3>{element.destination} ({element.days} Days)</h3>
                        <p><i>{element.description}</i></p>
                        <p><strong>Price:</strong> {element.totalCost} €</p>
                        {element.totalCost < 350 && <button disabled className="greate-deal">Greate Deal</button>}
                        {element.totalCost > 1500 && <button disabled className="premium">Premium</button>}
                        {element.allInclusive && <button disabled className="premium">All-Inclusive</button>}
                        <br/>
                        <button className="delete" onClick={()=>{deleteTravels(element.id)}}>Delete</button>
                        <button className="favorite">heart</button>
                    </div>
                    
                </div>
                
               ) 
            })}
        </div>
    )
}

export default TravelList;