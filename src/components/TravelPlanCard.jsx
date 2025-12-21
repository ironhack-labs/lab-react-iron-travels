function TravelPlanCard({ plan, deletePlan }) {
  return (
    <div className="plan-card">
      <h3 className="plan-destination">{plan.destination}</h3>
      <p className="plan-info">{plan.days} days</p>
      <p className="plan-info">€{plan.totalCost}</p>

      <div className="plan-labels">
        {plan.totalCost <= 350 && (
          <span className="label great-deal">Great Deal</span>
        )}
        {plan.totalCost >= 1500 && (
          <span className="label premium">Premium</span>
        )}
        {plan.allInclusive && (
          <span className="label all-inclusive">All Inclusive</span>
        )}
      </div>

      <button className="delete-btn" onClick={() => deletePlan(plan.id)}>
        Delete
      </button>
    </div>
  );
}

export default TravelPlanCard;
