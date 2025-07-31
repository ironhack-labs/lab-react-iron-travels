export default function TravelPlanCard({ plan, onDelete }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        marginBottom: "20px",
        borderRadius: "10px",
        backgroundColor: "white",
        maxWidth: "500px",
        margin: "0 auto",
        textAlign: "center",
        color: "black",
      }}
    >
      <img
        src={plan.image}
        alt={plan.destination}
        style={{
          height: "200px",
          width: "100%",
          objectFit: "cover",
          borderRadius: "6px",
        }}
      />

      <h3 style={{ marginTop: "10px" }}>{plan.destination}</h3>
      <p>{plan.description}</p>
      <p>
        <strong>Price:</strong> {plan.totalCost} €
      </p>

      <div style={{ margin: "10px 0" }}>
        {plan.totalCost <= 350 && <span>💸 Great Deal </span>}
        {plan.totalCost >= 1500 && <span>💎 Premium </span>}
        {plan.allInclusive && <span>🌴 All Inclusive</span>}
      </div>

      <button
        onClick={() => onDelete(plan.id)}
        style={{
          backgroundColor: "red",
          color: "white",
          border: "none",
          padding: "8px 16px",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Delete
      </button>
    </div>
  );
}
