import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

export const TravelList = () => {
  const [TravelPlans, setTravelPlans] = useState(travelPlansData);

  <img src={plan.image} className="image" />;
  return (
    <div>
      <h2>Travel Plans</h2>
      {TravelPlans.map((plan) => {
        console.log(plan);
        return (
          <div key={plan.id} id="plan-card">
            <img src={plan.image} alt={plan.destination} />
            <div className="inner-container">
              <h3>
                {plan.destination}({plan.days} days)
              </h3>
              <p>{plan.description}</p>
              <h4>Price: {plan.totalCost}$</h4>
              {plan.totalCost > 1500 ? <span id="premium">Premium</span> : null}
              {plan.totalCost < 350 ? (
                <span id="great-deal">Great Deal</span>
              ) : null}
              {plan.allInclusive ? (
                <span id="included">All Inclusive</span>
              ) : null}
              <button onClick={handleDelete} Delete></button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
