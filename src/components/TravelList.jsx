import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

const TravelList = () => {
  // Using useState to store the travel plans data in the component state
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  return (
    <div className="travelcard">
      <h2>Travel Plans</h2>
      {travelPlans.map((plan) => (
        <div className="destination" key={plan.id}>
          <h2>
            {plan.destination} ({plan.days} Days)
          </h2>
          <img
            src={plan.image}
            alt={plan.destination}
            style={{ maxWidth: "300px" }}
          />
          <p>
            <italic>{plan.description}</italic>
          </p>
          <p>
            <strong>Price:</strong> {plan.totalCost} €
          </p>
          <ul></ul>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default TravelList;
