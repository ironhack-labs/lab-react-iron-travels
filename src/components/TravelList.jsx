import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [plans, setPlans] = useState(travelPlansData);

const handleDeletePlan = (idToRemove)=>{
      const cloneList=structuredClone(plans)
      cloneList.splice(idToRemove,1)
      setPlans(cloneList)

    }

  return (
    <div>
      <h1>Travel Plans</h1>
      <ul>
        {plans.map((plan, index) => (
          <li key={plan.id}>
            <h2>{plan.destination}</h2>
            <img src={plan.image}/>
            <p>{plan.description}</p>
            <p>Price: {plan.totalCost} €</p>
            <p> {plan.totalCost <= 350 ? `Great Deal`: undefined} </p>
            <p> {plan.totalCost >= 1500 ? `Premium`: undefined} </p>
            <p> {plan.allInclusive ? `All inclusive` : undefined} </p>
            <button onClick={() => handleDeletePlan(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TravelList;