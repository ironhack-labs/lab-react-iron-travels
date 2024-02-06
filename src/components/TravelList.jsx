import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

// let button 
// if (travelPlansData.totalCost < 350) {
//     button = <button>test</button>
// }

function TravelList () {
    return (
        <div className="boxes">
            {travelPlansData.map((element) => {
               return (
                <div className="destination">
                    <img src={element.image} />
                    <div className="destinationInfo">
                        <h3>{element.destination} ({element.days} Days)</h3>
                        <p><i>{element.description}</i></p>
                        <p><strong>Price:</strong> {element.totalCost} €</p>
                        {element.totalCost < 350 && <button>test</button>}
                        
                        
                    </div>
                </div>
                
               ) 
            })}
        </div>
    )
}

export default TravelList;