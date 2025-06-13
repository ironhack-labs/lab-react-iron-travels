import { useState } from "react";

function TravelPlanCard({ plan, onDelete, onFavorite }) {
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
  const [colorIndex, setColorIndex] = useState(0);

  const handleColorCycle = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    onFavorite(plan);
  };

  return (
    <div
      style={{
        border: "1px solid gray",
        marginBottom: "15px",
        padding: "10px",
        width: "500px",
        borderRadius: "8px",
      }}
    >
      <h2>{plan.destination}</h2>
      <p>{plan.description}</p>
      <p>
        <strong>Price:</strong> {plan.totalCost} €
      </p>

      {plan.totalCost <= 350 && (
        <span
          style={{
            backgroundColor: "#28a745",
            color: "white",
            padding: "3px 6px",
            marginRight: "5px",
          }}
        >
          Great Deal
        </span>
      )}
      {plan.totalCost >= 1500 && (
        <span
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "3px 6px",
            marginRight: "5px",
          }}
        >
          Premium
        </span>
      )}
      {plan.allInclusive && (
        <span
          style={{
            backgroundColor: "#6c757d",
            color: "white",
            padding: "3px 6px",
          }}
        >
          All Inclusive
        </span>
      )}

      <br />
      <br />
      <button onClick={() => onDelete(plan.id)}>Delete</button>
      <button
        onClick={handleColorCycle}
        style={{
          backgroundColor: colors[colorIndex],
          color: "white",
          marginLeft: "10px",
        }}
      >
        ♡
      </button>
    </div>
  );
}

export default TravelPlanCard;
