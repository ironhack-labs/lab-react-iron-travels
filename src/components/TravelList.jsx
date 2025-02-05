import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const deleteItem = (travelId) => {
    setTravelPlans((prevPlans) =>
      prevPlans.filter((plan) => plan.id !== travelId)
    );
  };

  return (
    <div>
      {travelPlans.map((plan) => (
        <div className="plan" key={plan.id}>
          <div className="plan-image">
            <img src={plan.image} alt={plan.destination} />
          </div>
          <div className="data-body">
            <h3>
              {plan.destination} ({plan.days} days)
            </h3>
            <p>
              <i>{plan.description}</i>
            </p>
            <p>
              <strong>Price: </strong>
              {plan.totalCost} €
            </p>
          </div>
          <div className="buttons">
            {plan.totalCost <= 350 && <span className="deal">Great Deal</span>}
            {plan.totalCost >= 1500 && <span className="premium">Premium</span>}
            {plan.allInclusive && (
              <span className="all-inclusive">All Inclusive</span>
            )}
          </div>
          <button className="delete" onClick={() => deleteItem(plan.id)}>
            ×
          </button>
        </div>
      ))}
    </div>
  );
};

export default TravelList;
