
import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import "../App.css";

function TravelList() {
  const [plans, setPlans] = useState(travelPlansData);

  const handleDelete = (id) => {
    setPlans(plans.filter((plan) => plan.id !== id));
  };

  return (
    <div className="travel-list">
      {plans.map((plan) => (
        <div key={plan.id} className="travel-card">
          <h2>{plan.destination}</h2>
          <p><b>Days:</b> {plan.days}</p>
          <p><b>Cost:</b> {plan.totalCost} €</p>
          <p><b>Description:</b> {plan.description}</p>
          {plan.totalCost <= 350 && <span className="label">Great Deal</span>}
          {plan.totalCost >= 1500 && <span className="label">Premium</span>}
          {plan.allInclusive && <span className="label">All Inclusive</span>}
          <button onClick={() => handleDelete(plan.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}

export default TravelList;
