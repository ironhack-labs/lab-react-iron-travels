function TravelPlanCard({ plan, onDelete, onFavorite }) {
  return (
    <div className="travel-plan">
      <img src={plan.image} alt={plan.destination} />

      <div className="travel-plan-info">
        <h3>{plan.destination}</h3>

        <p>{plan.description}</p>

        <p>{plan.days} days</p>

        <p>{plan.totalCost} €</p>

        {plan.totalCost <= 350 && (
          <span className="label great-deal">Great Deal</span>
        )}

        {plan.totalCost >= 1500 && (
          <span className="label premium">Premium</span>
        )}

        {plan.allInclusive && (
          <span className="label all-inclusive">All Inclusive</span>
        )}

        <br />

        <button onClick={() => onFavorite(plan)}>♡</button>

        <button onClick={() => onDelete(plan.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TravelPlanCard;
