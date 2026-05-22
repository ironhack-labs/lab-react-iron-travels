function TravelPlanCard({ plan, onDelete, onFavorite }) {
  const isGreatDeal = plan.totalCost <= 350;
  const isPremium = plan.totalCost >= 1500;

  return (
    <div className="card">
      <img src={plan.image} alt={plan.destination} className="card-img" />
      <div className="card-body">
        <div className="card-header">
          <h2 className="card-title">{plan.destination}</h2>
          <div className="card-labels">
            {isGreatDeal && <span className="label deal">Great Deal</span>}
            {isPremium && <span className="label premium">Premium</span>}
            {plan.allInclusive && <span className="label inclusive">All Inclusive</span>}
          </div>
        </div>
        <p className="card-desc">{plan.description}</p>
        <div className="card-meta">
          <span>🗓 {plan.days} days</span>
          <span>💰 ${plan.totalCost.toLocaleString()}</span>
        </div>
        <div className="card-actions">
          {onFavorite && (
            <button className="btn-fav" onClick={() => onFavorite(plan)}>
              ♡ Favorite
            </button>
          )}
          {onDelete && (
            <button className="btn-delete" onClick={() => onDelete(plan.id)}>
              🗑 Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default TravelPlanCard;