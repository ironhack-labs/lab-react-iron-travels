import React from "react";

export default function TravelPlanCard({ plan, onDelete }) {
  const { destination, image, days, allInclusive, totalCost, description } = plan;

  const costLabel = totalCost <= 350 ? "Great Deal" : totalCost >= 1500 ? "Premium" : null;

  return (
    <div className="travel-card" style={{ border: "1px solid #ddd", borderRadius: 6, overflow: "hidden", width: 300 }}>
      <img src={image} alt={destination} style={{ width: "100%", height: 160, objectFit: "cover" }} />
      <div style={{ padding: 10 }}>
        <h3 style={{ margin: "6px 0" }}>{destination}</h3>
        <p style={{ margin: "6px 0", color: "#444" }}>{description}</p>
        <p style={{ margin: "6px 0", fontWeight: 600 }}>{days} days — €{totalCost}</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
          {costLabel && (
            <span style={{ background: "#eef", padding: "4px 8px", borderRadius: 4 }}>{costLabel}</span>
          )}
          {allInclusive && (
            <span style={{ background: "#ffe", padding: "4px 8px", borderRadius: 4 }}>All Inclusive</span>
          )}
        </div>

        <div style={{ marginTop: 10, display: "flex", justifyContent: "flex-end" }}>
          <button onClick={onDelete} style={{ background: "#f55", color: "white", border: "none", padding: "6px 10px", borderRadius: 4, cursor: "pointer" }}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
