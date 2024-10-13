import React from "react";

const TravelPlanCard = ({ plan, onDelete, onFavorite, favoriteColor }) => {
  return (
    <div
      key={plan.id}
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <img src={plan.image} alt={plan.destination} style={{ width: "100%" }} />
      <h2>
        {plan.destination} ({plan.days} Days)
      </h2>
      <p>{plan.description}</p>
      <p>Price: {plan.totalCost} €</p>

      {/* Conditional Labels */}
      {plan.totalCost >= 1500 && <span className="label premium">Premium</span>}
      {plan.totalCost <= 350 && <span className="label deal">Great Deal</span>}
      {plan.allInclusive && (
        <span className="label inclusive">All-Inclusive</span>
      )}

      {/* Buttons */}
      <button onClick={() => onDelete(plan.id)} style={{ marginRight: "10px" }}>
        Delete
      </button>
      {/* Favorite button with dynamic color */}
      <button
        style={{ backgroundColor: favoriteColor }}
        onClick={() => onFavorite(plan)}
      >
        ♡
      </button>
    </div>
  );
};

export default TravelPlanCard;
