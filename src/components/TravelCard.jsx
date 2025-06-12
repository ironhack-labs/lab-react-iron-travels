export default function TravelPlanCard({ plan, onDelete }) {
  return (
    <div
      key={plan.id}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        padding: "1rem",
        marginBottom: "1rem",
      }}
    >
      <img src={plan.image} alt="travel img" style={{ height: 300 }} />

      <div>
        <p>
          <strong>{plan.destination}</strong> <span>({plan.days} days)</span>
        </p>
        <p>{plan.description}</p>
        <span>{plan.totalCost}$</span>
        <br />
        {plan.totalCost <= 350 && (
          <span style={{ color: "green" }}>Great Deal</span>
        )}
        {plan.totalCost <= 1500 && (
          <span style={{ color: "orange" }}> Premium</span>
        )}
        <br />
        {plan.allInclusive && (
          <span style={{ fontWeight: "bold" }}>All inclusive</span>
        )}
        <br />
        <button onClick={() => onDelete(plan.id)}>Delete plan</button>
      </div>
    </div>
  );
}
