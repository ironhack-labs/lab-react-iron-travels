import { useState } from 'react';
import travelPlansData from '../assets/travel-plans.json'



const TravelList = () => {
    const [travelPlans, setTravelPlans] = useState(travelPlansData);

    const deletePlan = planId => {
        const filteredPlans = travelPlans.filter(plan => {
          return plan.id !== planId;
        });
     
        setTravelPlans(filteredPlans);
      };

    return (
        <>
        <div id="travel-cards-list">
        {travelPlans.map((plan)=>{
            const travelPlanCost = plan.parts[0].cost;
            return(
        <div id="travel-card" key={plan.id}>
            <img id="destination-image" src={plan.image} />
            <div id="destination-details">
                
                <h1 className="destination-info" id="destination-name">{plan.destination}</h1>
                <div id="destination-info-wrapper">
                 <p className="destination-info">{plan.description}</p>
                 <span className="destination-info"><b>Price:</b> {plan.parts[0].cost}€</span>
                 {(travelPlanCost <= 350) && <button id="great-deal-button">Great Deal</button>}
                 {(travelPlanCost > 1500) && (<div id="premium-deal-container"><button className="premium-deal-buttons">Premium</button><button className="premium-deal-buttons">All Inclusive</button></div>)}
                 </div>
               
                 <button onClick={() => deletePlan(plan.id)} id="hide-button">Delete</button>
             </div>
        </div>)
        })}</div>
     

        </>
    );
}

export default TravelList;