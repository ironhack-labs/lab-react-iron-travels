import { useState } from "react";
import travelPlansData from "./../../../src/assets/travel-plans.json";
import "./TravelList.css";
const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  function handleDelete(id) {
    const filteredPlans = travelPlans.filter((aPlan) => aPlan.id !== id);

    setTravelPlans(filteredPlans);
  }

  return (
    <div>
      {travelPlans.map((plan) => (
        <div className="container" key={plan.id}>
          <div>
            <img className="image" src={plan.image} alt="destination image" />
          </div>
          <div className="info">
            <h2>
              <strong>
                {" "}
                {plan.destination} ({plan.days} Days)
              </strong>
            </h2>
            <p>{plan.description}</p>
            <p>
              <strong>Price: </strong>
              {plan.totalCost}€
            </p>
            <div className="labels">
              {plan.totalCost <= 350 && <div className="deal">Great Deal</div>}
              {plan.totalCost >= 1500 && (
                <div className="blueLabel">Premium</div>
              )}
              {plan.allInclusive && (
                <div className="blueLabel">All Inclusive</div>
              )}
            </div>
            <button className="delete" onClick={() => handleDelete(plan.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TravelList;
