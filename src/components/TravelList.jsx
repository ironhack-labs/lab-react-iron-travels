import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import './TravelList.css';

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  return (
    <div className="TravelList">
      {travelPlans.map((plan) => (
        <div className="TravelPlanCard" key={plan.id}>
          <div className="TravelPlanCard__img-container">
            <img src={plan.image} alt={plan.destination} />
          </div>
          <div className="TravelPlanCard__content">
            <h2>{plan.destination}</h2>
            <p>{plan.description}</p>
            <p>
              {plan.days} days - ${plan.totalCost}
            </p>
            <div className="TravelPlanCard__labels">
              {plan.totalCost <= 350 && (
                <span className="TravelPlanCard__label TravelPlanCard__label--great-deal">
                  Great Deal
                </span>
              )}
              {plan.totalCost >= 1500 && (
                <span className="TravelPlanCard__label TravelPlanCard__label--premium">
                  Premium
                </span>
              )}
              {plan.allInclusive && (
                <span className="TravelPlanCard__label TravelPlanCard__label--all-inclusive">
                  All Inclusive
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TravelList;
