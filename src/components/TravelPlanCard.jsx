function TravelPlanCard({ plan, onDelete, onFavorite, favoriteColor }) {
  return (
    <div className="travel-card">
      <img src={plan.image} alt={plan.destination} />

      <div className="travel-info">
        <h2>
          {plan.destination} ({plan.days} Days)
        </h2>

        <p className="description">{plan.description}</p>

        <p>
          <strong>Price:</strong> {plan.totalCost} €
        </p>

        <div>
          {plan.totalCost <= 350 && <span className="label">Great Deal</span>}

          {plan.totalCost >= 1500 && <span className="label">Premium</span>}

          {plan.allInclusive && <span className="label">All-Inclusive</span>}
        </div>

        <div className="card-buttons">
          <button onClick={() => onDelete(plan.id)}>Delete</button>

          <button
            onClick={() => onFavorite(plan)}
            style={{ backgroundColor: favoriteColor }}
          >
            ♡
          </button>
        </div>
      </div>
    </div>
  );
}

export default TravelPlanCard;