import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const deletePlan = (id) => {
    const updatedPlans = travelPlans.filter((plan) => plan.id !== id);
    setTravelPlans(updatedPlans);
  };

  return (
    <div>
      <h2>Nos voyages</h2>
      <ul>
        {travelPlans.map((plan) => (
          <li key={plan.id}>
            <h3>{plan.destination}</h3>
            <p>{plan.description}</p>
            <p>Durée : {plan.days} jours</p>
            <p>Prix : ${plan.totalCost}</p>

            {plan.totalCost <= 350 && <span style={{ color: "green" }}>Great Deal</span>}
            {plan.totalCost >= 1500 && <span style={{ color: "gold" }}>Premium</span>}
            {plan.allInclusive && <span style={{ color: "blue", marginLeft: "5px" }}>All Inclusive</span>}

            <br />
            <button onClick={() => deletePlan(plan.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TravelList;
