import React from 'react';

function TravelPlanCard({ plan, onDelete }) {
  const labels = [];

  if (plan.totalCost <= 350) {
    labels.push("Great Deal");
  }

  if (plan.totalCost >= 1500) {
    labels.push("Premium");
  }

  if (plan.allInclusive) {
    labels.push("All Inclusive");
  }

  return (
    <li>
      <img src={plan.image} alt={plan.destination} />
      <p>Destination: {plan.destination}</p>
      <p>{plan.days} Days</p>
      <p>{plan.description}</p>
      <p>Price: {plan.totalCost}</p>
      {labels.map((label, i) => (
        <span key={i} className="label">
          {label}
        </span>
      ))}
      <button onClick={() => onDelete(plan.id)}>Delete trip</button>
    </li>
  );
}

export default TravelPlanCard;