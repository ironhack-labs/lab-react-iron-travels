import React from 'react';

function TravelCard({ plan, onDelete }) {
  return (
    <div className="travel-cards__card" id={plan.id}>
      <img src={plan.image} alt="" />
      <div className="travel-cards__infos">
        <h1>
          {plan.destination} ({plan.days} Days)
        </h1>
        <p>{plan.description}</p>
        <p>
          <strong>Price:</strong> {plan.totalCost} €
        </p>

        <div className="travel-cards__labels">
          {plan.totalCost <= 350 && <p className="great-deal">Great Deal</p>}
          {plan.totalCost >= 1500 && <p className="premium">Premium</p>}
          {plan.allInclusive && <p className="all-inclusive">All Inclusive</p>}
        </div>
        <button className="delete-button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TravelCard;
