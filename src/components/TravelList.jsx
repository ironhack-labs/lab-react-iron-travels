import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const handleDelete = (id) => {
    const updatedTravelPlans = travelPlans.filter((plan) => plan.id !== id);
    setTravelPlans(updatedTravelPlans);
  };

  return (
    <div>
      <h1>Travel Plans</h1>
      <ul>
        {travelPlans.map((travelPlan) => (
          <li key={travelPlan.id}>
            <img src={travelPlan.image} alt={travelPlan.destination} />
            <h2>{travelPlan.destination}</h2>
            <p>{travelPlan.description}</p>
            <p>Days: {travelPlan.days}</p>
            <p>
              {travelPlan.totalCost <= 350 && (
                <span className="label">Great Deal</span>
              )}
              {travelPlan.totalCost >= 1500 && (
                <span className="label premium">Premium</span>
              )}
            </p>
            {travelPlan.allInclusive && (
              <p>
                <span className="label">All Inclusive</span>
              </p>
            )}
            <button onClick={() => handleDelete(travelPlan.id)}>Delete</button>
            <ul>
              {travelPlan.parts.map((part, index) => (
                <li key={index}>
                  <p>{part.name}</p>
                  <p>{part.description}</p>
                  <p>Cost: ${part.cost}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TravelList;
