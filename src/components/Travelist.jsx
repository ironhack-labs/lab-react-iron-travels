import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
const Travelist = () => {
  const [plans, setPlans] = useState(travelPlansData);
  console.log(plans);
  return (
    <div>
      {plans.map((onePlan) => {
        return (
          <div className="planCard" key={onePlan.id}>
            <img src={onePlan.image} alt="plan image" />{" "}
            <section>
              <h4>{onePlan.destination}</h4>
              <p>{onePlan.description}</p>
              <h4> Price: ${onePlan.totalCost}</h4>
              <h4>{onePlan.totalCost < 350 ? "GREAT DEAL" : " "}</h4>
              <h4>{onePlan.totalCost > 1500 ? "PREMIUM" : " "}</h4>
              <button>delete</button>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default Travelist;
