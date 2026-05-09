function TravelPlanCard({ plan, onDelete, onFavorite, favoriteColor }) {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "16px", marginBottom: "16px", display: "flex", gap: "16px" }}>
      <img src={plan.image} alt={plan.destination} style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "8px" }} />
      <div style={{ flex: 1 }}>
        <h2>{plan.destination}</h2>
        <p>{plan.description}</p>
        <p><strong>Days:</strong> {plan.days}</p>
        <p><strong>Total Cost:</strong> ${plan.totalCost}</p>

        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "8px" }}>
          {plan.totalCost <= 350 && (
            <span style={{ background: "green", color: "white", padding: "4px 8px", borderRadius: "4px" }}>
              Great Deal
            </span>
          )}
          {plan.totalCost >= 1500 && (
            <span style={{ background: "gold", color: "black", padding: "4px 8px", borderRadius: "4px" }}>
              Premium
            </span>
          )}
          {plan.allInclusive && (
            <span style={{ background: "blue", color: "white", padding: "4px 8px", borderRadius: "4px" }}>
              All Inclusive
            </span>
          )}
        </div>

        <div style={{ marginTop: "12px", display: "flex", gap: "8px" }}>
          <button onClick={() => onDelete(plan.id)} style={{ background: "red", color: "white", border: "none", padding: "6px 12px", borderRadius: "4px", cursor: "pointer" }}>
            Delete
          </button>
          <button
            onClick={() => onFavorite(plan)}
            style={{ background: favoriteColor || "gray", color: "white", border: "none", padding: "6px 12px", borderRadius: "4px", cursor: "pointer" }}
          >
            ♡
          </button>
        </div>
      </div>
    </div>
  );
}

export default TravelPlanCard;
