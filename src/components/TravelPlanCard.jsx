import React from "react";

function TravelPlanCard(plan, deleteList) {
  return (
    <div className="details" key={plan.id}>
      <div>
        <img src={plan.image} alt={plan.destination} />
      </div>
      <div className="details-written">
        <p>
          {plan.destination} ({plan.days} days)
        </p>
        <p>{plan.description}</p>
        <p>
          <strong>Price:</strong>
          {plan.totalCost}
        </p>

        <div className="labels">
          {plan.totalCost <= 350 && (
            <span className="label great-deal">Great Deal</span>
          )}
          {plan.totalCost >= 1500 && (
            <span className="label premium">Premium</span>
          )}
          {plan.allInclusive && (
            <span className="label all-inclusive">All Inclusive</span>
          )}
        </div>
        <button
          onClick={() => {
            deleteList(plan.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TravelPlanCard;
