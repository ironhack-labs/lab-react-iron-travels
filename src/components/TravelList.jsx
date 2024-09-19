import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [travelPlans, setTravelPlan] = useState(travelPlansData);

  return (
    <div>
      <h1>Travel Plans</h1>
      <ul>
        {travelPlans.map((plan) => (
          <li key={plan.id}>
            <h3>{plan.destination}</h3>
            <p>Cost: ${plan.totalCost}</p>
            <p>{plan.description}</p>

            {plan.totalCost <= 350 && <span style={{ color: "gren"}}>Gran Oferta</span>}
            {plan.totalCost >= 1500 && <span style={{color: "red"}}>Premium</span>}   

            {plan.allInclusive && <span style={{ color:"blue"}}>Todo Incluido</span>
           </li>

        ))}
      </ul>
    </div>
  );
}

export default TravelList;
