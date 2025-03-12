import React, { useState } from 'react';
{/*on importe le json file dans ce component */}
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

const TravelList = () => {
    {/* on crée une useState pour le travelPlans*/ }
    const [travelPlans, setTravelPlans] = useState(travelPlansData);
    {/* on crée une fonction pour effacer le plan lorsque l'on clique sur le bouton*/}
   function handleDelete(thePlansId) {
        const filteredPlans = travelPlans.filter((plan) => plan.id !== thePlansId);
        setTravelPlans(filteredPlans);
   }
    return (
        <div>
        {travelPlans.map((plan) => (
          <div className="plan-card" key={plan.id}>
            <img src={plan.image} alt={plan.destination} />
            <div className="column">
            <h2>{plan.destination}</h2>
            <p>{plan.description}</p>
            <p>{plan.date}</p>
            <p><span className="bold">Price: </span>{plan.totalCost}€</p>
            {/*on crée un bouton pour effacer le plan*/}
            
            {/* pour créer les différents labels demandés*/}
            {plan.totalCost <= 350 && <span className="green-label">Great Deal</span>}
            {plan.totalCost >= 1500 && <span className="blue-label cote">Premium</span>}
            {plan.allInclusive && <span className="blue-label cote">All Inclusive</span>}
            <button onClick={() => {
                handleDelete(plan.id);
            }}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    );
}

export default TravelList;