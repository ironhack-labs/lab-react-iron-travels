import { useState } from 'react';
import travelPlansData from "../assets/travel-plans.json";

const TravelList = () => {
  const [travels, setTravels] = useState(travelPlansData);

  function handleDelete(planId) {
    const filteredPlans = travels.filter((onePlan) => onePlan.id !== planId)
    setTravels(filteredPlans)
  }

  return (
    <>
        {travels.map((currentPlan) => (
         <div key={currentPlan.id} id="main-container">
            <img src={currentPlan.image} />
            <div id="text-container">
            <h3>{currentPlan.destination}({currentPlan.days} Days)</h3>
            <p>{currentPlan.description}</p>
            <p><b>Price:</b> {currentPlan.totalCost}<b>€</b></p>
            <div id="deals">
            {currentPlan.totalCost <= 350 && <span id="great-deal">Great Deal!</span>}
              {currentPlan.totalCost >= 1500 && <span id="premium-deal">Premium</span>}
              {currentPlan.allInclusive && <span id="allinclusive-deal">All-Inclusive</span>}
        </div>
        <button onClick={() => {handleDelete(currentPlan.id)}}>Delete</button>
            </div>
          </div>
        ))}
    </>
  );
};

export default TravelList;
