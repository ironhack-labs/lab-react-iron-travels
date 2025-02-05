import Heart from "react-heart";
import { useState } from "react";

function TravelPlanCard({ plan, onDelete, onFav, isFavActive }) {
  return (
    <div>
      <div key={plan.id} className="card">
        <div>
          <img src={plan.image} alt={plan.name} />
        </div>
        <div>
          <h3>
            {plan.destination}
            <span> ({plan.days} Days)</span>
          </h3>
          <p>{plan.description}</p>
          <p className="price-span">
            <span>Price:</span> {plan.totalCost} €
          </p>
          {plan.totalCost <= 350 && (
            <span className="great-deal">Great Deal</span>
          )}
          {plan.totalCost > 1500 && (
            <span className="premium-deal">Premium</span>
          )}
          {plan.allInclusive && (
            <span className="allinclusive">All-inclusive</span>
          )}
          <p>
            <button
              onClick={() => {
                onDelete(plan.id);
              }}
            >
              Delete
            </button>
            <div style={{ width: "1.5rem" }}>
              <Heart isActive={isFavActive} onClick={() => onFav(plan.id)} />
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
export default TravelPlanCard;
