import { useState } from "react";

import JSONTravelPlans from "../assets/travel-plans.json";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(JSONTravelPlans);

  const greatDeal = 350;
  const premiumPrice = 1500;

  return (
    <div>
      {travelPlans.map((travelPlan) => {
        return (
          <div key={travelPlan.id} className="TravelList">
            <div>
              <img src={travelPlan.image} alt="" />
            </div>
            <div>
              <h2>
                {travelPlan.destination} ({travelPlan.days} days)
              </h2>
              <p>{travelPlan.description}</p>
              <p>
                <span>Price: </span>
                {travelPlan.totalCost} €
              </p>
              <p className="label-wrapper">
                {travelPlan.totalCost <= greatDeal ? (
                  <span className="Label">Great Deal</span>
                ) : null}
                {travelPlan.totalCost > premiumPrice ? (
                  <span className="Label premium">Premium</span>
                ) : null}
                {travelPlan.allInclusive ? (
                  <span className="Label premium">All Inclusive</span>
                ) : null}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TravelList;