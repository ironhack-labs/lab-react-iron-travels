import { useState } from "react";
import travelPlansData from "/src/assets/travel-plans.json";
import Label from "./Label";

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const getCostLabel = (plan) => {
    let costLabel = "";
    let isGreen = false;

    if (plan.totalCost <= 350) {
      costLabel = "Great Deal";
      isGreen = true;
    } else if (plan.totalCost >= 1500) {
      costLabel = "Premium";
    }

    return { costLabel, isGreen };
  };

  return (
    <div>
      <h2>Travel Plans</h2>
      {travelPlans.map((plan) => {
        const labelProps = getCostLabel(plan);
        return (
          <div key={plan.id} className="card">
            <img className="image" src={plan.image} alt={plan.destination} />
            <div>
              <h3>
                {plan.destination} ({plan.days} Days)
              </h3>
              <p>Price: ${plan.totalCost}</p>
              {labelProps.costLabel.length > 0 && (
                <Label isGreen={labelProps.isGreen}>
                  {labelProps.costLabel}
                </Label>
              )}
              {plan.allInclusive && <Label>All-inclusive</Label>}
              <p>{plan.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TravelList;
