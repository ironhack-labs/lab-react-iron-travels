function TravelPlanCard({ plan, deletePlan }) {
  return (
    <div>
      <h2>{plan.destination}</h2>
      <p>{plan.description}</p>
      <p>Price: €{plan.totalCost}</p>

      {plan.totalCost <= 350 && <span>Great Deal </span>}
      {plan.totalCost >= 1500 && <span>Premium </span>}
      {plan.allInclusive && <span>All Inclusive </span>}

      <br />

      <button onClick={() => deletePlan(plan.id)}>Delete</button>
    </div>
  );
}

export default TravelPlanCard;