import React, { useState, useEffect } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList () {

    const [travelPlans, setTravelPlans] = useState(travelPlansData)

    function deletePlan(id) {
        const updatedPlans = travelPlans.filter((plan) => plan.id !== id);
        setTravelPlans(updatedPlans);
    } //the function to delete the item

    /* El usuario hace clic en el botón.
        La función deletePlan se ejecuta y recibe el id del elemento.
        filter crea una nueva lista sin ese elemento.
        setTravelPlans actualiza la lista en el estado.
        React vuelve a renderizar el componente mostrando la lista actualizada. */
    
    
    return (
    <ul id="listOfDestinations">
        {travelPlans.map((plan) => (
            <li key={plan.id} className="destinationCard">
                <img src={plan.image} alt="Picture of the destination" />
                <div>
                    <h3 id="destinationTitle">{plan.destination} ({plan.days} days)</h3>
                    <p id="destinationDescription">{plan.description}</p>
                    <p><strong>Price: </strong>{plan.totalCost} €</p>
                    <div id="labelDiv">
                        {plan.totalCost <= 350 ? <label id="greatDealLabel"><strong>Grat Deal</strong></label> : null}
                        {plan.totalCost >= 1500 ? <label className="bluelabel">Premium</label> : null}
                        {plan.allInclusive ? <label className="bluelabel">All Inclusive</label> : null}
                    </div>
                    <button id="deleteBTN" onClick={() => deletePlan(plan.id)}>Delete</button>
                    
                </div>
            </li>
        ))}
    </ul>)
}

export default TravelList