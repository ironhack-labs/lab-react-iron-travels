import React from "react";

function TravelItem({ travel, onDelete }) {
  const { id, destination, image, days, allInclusive, totalCost, description } = travel;

  // Etiquetas según el precio
  let label = "";
  if (totalCost <= 350) label = "Great Deal";
  else if (totalCost >= 1500) label = "Premium";

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        marginBottom: "15px",
        borderRadius: "5px",
        maxWidth: "500px"
      }}
    >
      <h2>{destination}</h2>
      <img src={image} alt={destination} style={{ width: "100%", borderRadius: "5px" }} />
      <p>{description}</p>
      <p>Days: {days}</p>
      <p>Total Cost: ${totalCost}</p>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        {label && <span style={{ padding: "5px", background: "#eee", borderRadius: "5px" }}>{label}</span>}
        {allInclusive && <span style={{ padding: "5px", background: "#eee", borderRadius: "5px" }}>All Inclusive</span>}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default TravelItem;
