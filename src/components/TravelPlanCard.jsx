function TravelPlanCard({ plan, onDelete, onFavorite, isFavorite }) {
  return (
    <div className="plan-card">
      <h3>
        {plan.destination} ({plan.days} Days)
      </h3>
      <p>{plan.description}</p>
      <p className="price">Price: {plan.totalCost} €</p>
      <div className="labels">
        {plan.totalCost >= 1500 && (
          <span className="label label-premium">Premium</span>
        )}
        {plan.totalCost <= 350 && (
          <span className="label label-deal">Great Deal</span>
        )}
        {plan.allInclusive && (
          <span className="label label-inclusive">All-Inclusive</span>
        )}
      </div>
      <div className="buttons">
        <button className="delete-btn" onClick={() => onDelete(plan.id)}>
          Delete
        </button>
        {!isFavorite && (
          <button className="favorite-btn" onClick={() => onFavorite(plan)}>
            ♡ Add to Favorites
          </button>
        )}
      </div>
    </div>
  );
}

export default TravelPlanCard;
