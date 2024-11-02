import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

const TravelList = () => {
  const [travelplans, settravelPlans] = useState(travelPlansData);
  return (
    <div>
      <h2>Tailored Travel Plans for Ironhackers</h2>
      <div>
        {travelplans.map((onePlan) => {
          return (
            <div key={onePlan.id} id="plan-card">
              <img src={onePlan.image} alt={onePlan.destination} />
              <div id="inner container">
                <h4>
                  {onePlan.destination} ({onePlan.days} Days)
                </h4>
                <p>{onePlan.description}</p>
                <h6>Price: {onePlan.totalCost}€</h6>
                {onePlan.totalCost > 1500 ? (
                  <span id="premium"> Premium</span>
                ) : null}
                {onePlan.totalCost > 350 ? (
                  <span id="great-deal"> Great Deal</span>
                ) : null}
                {onePlan.allInclusive ? (
                  <span id="included"> All Inclusive</span>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TravelList;
