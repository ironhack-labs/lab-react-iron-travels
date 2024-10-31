import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

export const TravelList = () => {
  const [TravelPlans, setTravelPlans] = useState(travelPlansData);

  return (
    <div>
      <h2>Travel Plans</h2>
      {TravelPlans.map((plan) => {
        console.log(plan);
        return (
          <div key={plan.id}>
            <img src={plan.image} className="image" />
            <h3>{plan.destination} </h3>
            <h3>({plan.days} days )</h3>
            {/* <h3>{plan.allInclusive} </h3> */}
            <h3>Price:{plan.totalCost} € </h3>
            <h3>{plan.description} </h3>
            {/* <h3>{plan.parts[0].name} </h3>
            <h3>{plan.parts[0].description} </h3> */}
            <h3>{plan.parts[0].costs} </h3>
          </div>
        );
      })}
    </div>
  );
};
