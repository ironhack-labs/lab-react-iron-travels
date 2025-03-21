function TravelPlanCard({ plan, handleDelete}){

const getCostLabel = (cost) => {
    if (cost <= 350) return "Great Deal";
    if (cost >= 1500) return "Premium";
    return null;
  };

  const costLabel = getCostLabel(plan.totalCost);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        marginBottom: "20px",
        borderRadius: "8px",
      }}
    >
      <img
        src={plan.image}
        alt={plan.destination}
        style={{ width: "100%", maxWidth: "400px", borderRadius: "8px" }}
      />
      <h3>{plan.destination}</h3>
      <p>{plan.description}</p>
      <p>
        <strong>Duration:</strong> {plan.days} days
      </p>
      <p>
        <strong>Total Cost:</strong> ${plan.totalCost}
      </p>

      {/* LABELS */}
      <div style={{ marginTop: "10px" }}>
        {costLabel && (
          <span
            style={{
              backgroundColor: "#e0e0e0",
              padding: "4px 8px",
              marginRight: "10px",
              borderRadius: "4px",
              fontWeight: "bold",
            }}
          >
            {costLabel}
          </span>
        )}
        {plan.allInclusive && (
          <span
            style={{
              backgroundColor: "#d1ffd6",
              padding: "4px 8px",
              borderRadius: "4px",
              fontWeight: "bold",
            }}
          >
            All Inclusive
          </span>
        )}
      </div>

      {/* DELETE BUTTON */}
      <button
        onClick={() => handleDelete(plan.id)}
        style={{
          marginTop: "12px",
          padding: "8px 12px",
          backgroundColor: "#ff4d4f",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </div>
  );
}


export default TravelPlanCard




