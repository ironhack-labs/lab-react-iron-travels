function TravelPlanCard({ plan, onDeletePlan, onMakeFavorite }) {
  const badges = [];
  if (plan.totalCost <= 350) badges.push(<div key={1}>Great Deal</div>);
  if (plan.totalCost >= 1500) badges.push(<div key={2}>Premium</div>);
  if (plan.allInclusive) badges.push(<div key={3}>All-Inclusive</div>);

  return (
    <li
      key={plan.id}
      style={{
        display: "flex",
        gap: "20px",
        border: "1px solid black",
        width: "fit-content",
      }}
    >
      <img
        src={plan.image}
        alt="Desttination image"
        style={{ width: "400px" }}
      />
      <div style={{ width: "400px", textAlign: "left" }}>
        <h2>
          {plan.destination} ({plan.days} Days)
        </h2>
        <p>{plan.description}</p>
        <p>Price: {plan.totalCost}€</p>
        <div style={{ display: "flex", gap: "10px" }}>{badges}</div>
        <button
          style={{ backgroundColor: "#f1f1f1", border: "1px solid black" }}
          onClick={() => onDeletePlan(plan.id)}
        >
          DELETE
        </button>
        <button
          style={{
            backgroundColor: "#f1f1f1",
            border: "1px solid black",
          }}
          onClick={() => onMakeFavorite(plan.id)}
        >
          ♡
        </button>
      </div>
    </li>
  );
}

export default TravelPlanCard;
