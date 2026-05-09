function TravelPlanCard(props) {
  const plan = props.plan;
  const isCompact = props.compact;

  if (isCompact) {
    return (
      <div className="card card--compact">
        <img className="card__image--compact" src={plan.image} alt={plan.destination} />
        <div className="card__compact-body">
          <p className="card__compact-title">{plan.destination} ({plan.days} Days)</p>
          <p className="card__compact-price">{plan.totalCost} €</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <img className="card__image" src={plan.image} alt={plan.destination} />

      <div className="card__body">
        <h2 className="card__title">{plan.destination} ({plan.days} Days)</h2>
        <p className="card__description">{plan.description}</p>
        <p className="card__price">Price: {plan.totalCost} €</p>

        <div className="card__labels">
          {plan.totalCost <= 350 && (
            <span className="label label--great-deal">Great Deal</span>
          )}
          {plan.totalCost >= 1500 && (
            <span className="label label--premium">Premium</span>
          )}
          {plan.allInclusive && (
            <span className="label label--all-inclusive">All-Inclusive</span>
          )}
        </div>

        <div className="card__actions">
          <button className="btn-delete" onClick={() => props.onDelete(plan.id)}>
            Delete
          </button>
          {props.onFavorite && (
            <button className="btn-favorite" onClick={() => props.onFavorite(plan)}>
              ♡
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default TravelPlanCard;