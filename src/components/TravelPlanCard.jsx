function TravelPlanCard({ plan, onDelete, onFavorite, favoriteColor }) {
  const getDealLabel = (totalCost) => {
    if (totalCost <= 350) return { text: "Great deal", type: "great" };
    if (totalCost <= 1500) return { text: "Premium", type: "premium" };
    return null;
  };

  const deal = getDealLabel(plan.totalCost);

  return (
    <article className="travel-card">
      <div className="travel-card__image">
        <img src={plan.image} alt={plan.destination} />
        {plan.allInclusive && (
          <span className="badge badge--inclusive">Todo incluido</span>
        )}
      </div>
      <div className="travel-card__body">
        <div className="travel-card__header">
          <div>
            <h3 className="travel-card__title">{plan.destination}</h3>
            <p className="travel-card__meta">
              {plan.days} días · ${plan.totalCost}
            </p>
          </div>
          <div className="action-buttons">
            {onFavorite && (
              <button
                className="btn-favorite"
                style={favoriteColor ? { backgroundColor: favoriteColor } : {}}
                onClick={() => onFavorite(plan)}
                aria-label={`Favorito ${plan.destination}`}
              >
                ♡
              </button>
            )}
            {onDelete && (
              <button
                className="btn-delete"
                onClick={() => onDelete(plan.id)}
                aria-label={`Eliminar ${plan.destination}`}
              >
                ×
              </button>
            )}
          </div>
        </div>
        <p className="travel-card__description">{plan.description}</p>
        {deal && <span className={`tag tag--${deal.type}`}>{deal.text}</span>}
      </div>
    </article>
  );
}

export default TravelPlanCard;
