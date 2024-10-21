import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

const TravelList = () => {
  const handleDelete = (id) => {
    setTravelPlans(travelPlans.filter((plan) => plan.id !== id));
  };
  const [travelPlans, setTravelPlans] = useState(travelPlansData);
  return travelPlans.map((plan) => (
    <div key={plan.id}>
      <img src={plan.image} alt={plan.destination} />

      <div>
        <h2>
          {plan.destination}({plan.days} days)
        </h2>
        <p>{plan.description}</p>
        <p>price: {plan.totalCost}</p>
        {plan.totalCost < 350 && <p>Great deal</p>}
        {plan.totalCost >= 1500 && <p>Premium</p>}
        {plan.allInclusive && <p>All Inclusive</p>}
        <button type="button" onClick={() => handleDelete(plan.id)}>
          Delete
        </button>
      </div>
    </div>
  ));
};

export default TravelList;
