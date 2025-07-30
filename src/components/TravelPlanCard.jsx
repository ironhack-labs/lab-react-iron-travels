import { useState } from "react";

const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

function TravelPlanCard({ plan, onDelete, onFavorite, isFavorite }) {
  const [colorIndex, setColorIndex] = useState(0);

  const handleFavoriteClick = () => {
    if (onFavorite) {
      onFavorite(plan);
    }
    setColorIndex((colorIndex + 1) % colors.length);
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "10px 0",
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: isFavorite ? "#fff8e1" : "white",
      }}
    >
      <h3>{plan.destination}</h3>
      <p>{plan.description}</p>
      <p>Total Cost: {plan.totalCost}€</p>

      {plan.totalCost <= 350 && <span style={{ color: "green" }}>Great Deal</span>}
      {plan.totalCost >= 1500 && <span style={{ color: "gold" }}>Premium</span>}
      {plan.allInclusive && (
        <span style={{ color: "blue", marginLeft: "10px" }}>All Inclusive</span>
      )}

      <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
        {onFavorite && (
          <button
            onClick={handleFavoriteClick}
            style={{
              backgroundColor: colors[colorIndex],
              color: "white",
              padding: "5px 10px",
              border: "none",
              borderRadius: "3px",
              cursor: "pointer",
            }}
          >
            ♡
          </button>
        )}

        <button
          onClick={() => onDelete(plan.id)}
          style={{
            backgroundColor: "crimson",
            color: "white",
            padding: "5px 10px",
            border: "none",
            borderRadius: "3px",
            cursor: "pointer",
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TravelPlanCard;
