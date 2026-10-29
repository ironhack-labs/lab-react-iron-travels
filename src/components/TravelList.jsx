import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  function handleDeleteButton(id) {
    setTravelPlans(
        travelPlans.filter((plan) => plan.id !== id)
    );
  }

  return (
    <div>
      <h1>Iron Travel</h1>

      {travelPlans.map((plan) => {
        return (
          <div className = "travel-plan-card" key={plan.id}>
            <img src = {plan.image} width = "300" /> 
            <h2>{plan.destination} ({plan.days}Days)</h2>
            <p>{plan.description}</p>
            <p>Price: {plan.totalCost}€</p>
            <div className = "labels">
            {plan.totalCost <= 350 && <span className = "great-deal">Great Deal</span>}
            {plan.totalCost >= 1500 && <span className = "premium">Premium</span>}
            {plan.allInclusive && <span className="all-inclusive">All Inclusive</span>}
            </div>
            <button style = {{color: "red"}} onClick = {()=> handleDeleteButton(plan.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default TravelList;