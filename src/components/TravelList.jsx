import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [travelPlan, setTravelPlan] = useState(travelPlansData);

  function deletePlan(id) {
    let newPlan = travelPlan.filter((plan) => {
      return plan.id !== id;
    });
    setTravelPlan(newPlan);
  }

  return (
    <div>
      {travelPlan.map((plan) => (
        <div className="travelPlan" key={plan.id}>
          <img src={plan.image} alt="" />
          <div class="mainContent">
            <h1>{plan.destination}</h1>
            <br />
            <p>{plan.description}</p>
            <br />
            <strong>Price</strong> {plan.totalCost} €
            {plan.totalCost < 350 ? (
              <div>
                <span className="deal">Great Deal</span>
              </div>
            ) : (
              <div>
                <span className="premium">Premium</span>
              </div>
            )}
            <button
              onClick={() => {
                deletePlan(plan.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TravelList;
