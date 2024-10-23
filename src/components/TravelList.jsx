import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const removeButton = ((planId) => {
    const newTravelPlans = travelPlansData.filter((plan, i) => planId !== plan.id) // only keep the ones that are not clicked
    setTravelPlans(newTravelPlans);
    console.log("Delete")
  });



  return (
    <section>
      {travelPlans.map((plan) => (
        <div className="box" key={plan.id}>
          <img src={plan.image} alt={plan.destination} />
          <div>
            <h2>
              {plan.destination} ({plan.days} Days)
            </h2>
            <p>
              <i>{plan.description}</i>
            </p>
            <p>
              <strong>Price: </strong>
              {plan.totalCost} €
            </p>
            <p>
              {plan.totalCost <= 350 && (
                <span className="label">Good Deal</span>
              )}
              {plan.totalCost >= 1500 && <span className="label">Premium</span>}
              {plan.allInclusive && (
                <span className="label" id="all-inclusive">
                  All Inclusive
                </span>
              )}
            </p>
            <p>
              <button onClick={() => {removeButton(plan.id)}}>Delete</button>
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TravelList;
