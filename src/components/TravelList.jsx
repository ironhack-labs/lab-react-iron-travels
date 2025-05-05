import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
function TravelList() {
  //const plans = travelPlansData;
  const [plans, setPlans] = useState(travelPlansData);
  const deletePlan = (id) => {
    setPlans(plans.filter((plan) => plan.id !== id));
  };

  return plans.map((plan) => (
    <div className="card" key={plan.id}>
      <div className="image-box">
        <img className="destination-image" src={plan.image} alt="destination" />
      </div>
      <div className="text-box">
        <div className="text-container">
          <h3 className="trip-header">{`${plan.destination} (${plan.days} days)`}</h3>
          <p className="trip-pitch">{plan.description}</p>
          <p className="trip-price">
            <span className="bold">Price: </span>
            {`${plan.totalCost}€`}
          </p>
          <div className="label-container">
            {plan.totalCost > 1500 && (
              <p className="label label-blue">Premium</p>
            )}
            {plan.allInclusive && (
              <p className="label label-blue">All-Inclusive</p>
            )}
            {plan.totalCost <= 350 && (
              <p className="label label-green">Great Deal</p>
            )}
          </div>
          <button className="delete-btn" onClick={() => deletePlan(plan.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  ));
}
export default TravelList;
