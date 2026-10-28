import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  // Function to remove a plan by its ID
  function deletePlan(id) {
    const filteredPlans = travelPlans.filter(function (plan) {
      return plan.id !== id;
    });
    setTravelPlans(filteredPlans);
  }

  return (
    <div className="travel-list">
      {travelPlans.map(function (plan) {
        return (
          <div key={plan.id} className="card">
            <img src={plan.image} alt={plan.destination} />
            <div className="info">
              <h3>
                {plan.destination}, {plan.country} ({plan.days} Days)
              </h3>
              <p>{plan.description}</p>
              <p>
                <strong>Price:</strong> {plan.totalCost} €
              </p>

              {/* LABELS */}
              <div>
                {plan.totalCost <= 350 && (
                  <span className="label green">Great Deal</span>
                )}
                {plan.totalCost >= 1500 && (
                  <span className="label blue">Premium</span>
                )}
                {plan.allInclusive && (
                  <span className="label blue">All-Inclusive</span>
                )}
              </div>

              {/* DELETE BUTTON */}
              <button
                className="btn-delete"
                onClick={function () {
                  deletePlan(plan.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TravelList;
