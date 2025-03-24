import { useState } from "react";

function TravelPlanCard({ plan, onDelete, onFavorite, isFavorite }) {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const handleColorCycle = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "1rem",
      margin: "1rem 0",
      backgroundColor: isFavorite ? "#ffeef0" : "white"
    }}>
      <h2>{plan.destination}</h2>
      <p>{plan.description}</p>
      <p><strong>Price:</strong> {plan.totalCost} €</p>

      {/* Etiquetas condicionales */}
      {plan.totalCost <= 350 && (
        <span style={{ color: "green", fontWeight: "bold", marginRight: "10px" }}>
          Great Deal
        </span>
      )}
      {plan.totalCost >= 1500 && (
        <span style={{ color: "blue", fontWeight: "bold", marginRight: "10px" }}>
          Premium
        </span>
      )}
      {plan.allInclusive && (
        <span style={{ color: "orange", fontWeight: "bold" }}>
          All Inclusive
        </span>
      )}

      <div style={{ marginTop: "1rem" }}>
        {onFavorite && (
          <button
            onClick={() => {
              onFavorite(plan);
              handleColorCycle();
            }}
            style={{ backgroundColor: colors[colorIndex], color: "white", marginRight: "10px" }}
          >
            ♡ Favorite
          </button>
        )}

        <button onClick={() => onDelete(plan.id)}>🗑️ Delete</button>
      </div>
    </div>
  );
}

export default TravelPlanCard;
