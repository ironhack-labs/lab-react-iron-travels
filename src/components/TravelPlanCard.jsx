function TravelPlanCard({
  plan,
  onDelete,
  onToggleFavorite,
  isFavorite,
  favoriteColor,
  compact = false,
}) {
  const labels = [];

  if (plan.totalCost <= 350) {
    labels.push("Great Deal");
  } else if (plan.totalCost >= 1500) {
    labels.push("Premium");
  }

  if (plan.allInclusive) {
    labels.push("All Inclusive");
  }

  return (
    <article className={`travel-card${compact ? " travel-card-compact" : ""}`}>
      <div className="card-image-wrap">
        <img className="card-image" src={plan.image} alt={plan.destination} />
        <button
          className={`favorite-button${isFavorite ? " is-favorite" : ""}`}
          style={isFavorite ? { "--favorite-color": favoriteColor } : undefined}
          type="button"
          onClick={() => onToggleFavorite(plan.id)}
          aria-label={`${isFavorite ? "Remove" : "Add"} ${plan.destination} ${
            isFavorite ? "from" : "to"
          } favorites`}
          aria-pressed={isFavorite}
        >
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>

      <div className="card-content">
        <div className="card-title-row">
          <div>
            <h3>{plan.destination}</h3>
            <p className="trip-duration">{plan.days} days</p>
          </div>
          <p className="trip-price">
            <span>$</span>
            {plan.totalCost.toLocaleString()}
          </p>
        </div>

        <p className="card-description">{plan.description}</p>

        {labels.length > 0 && (
          <div className="card-labels" aria-label="Trip features">
            {labels.map((label) => (
              <span
                className={`trip-label ${
                  label === "Premium"
                    ? "label-premium"
                    : label === "All Inclusive"
                      ? "label-inclusive"
                      : "label-deal"
                }`}
                key={label}
              >
                {label}
              </span>
            ))}
          </div>
        )}

        <button
          className="delete-button"
          type="button"
          onClick={() => onDelete(plan.id)}
          aria-label={`Delete ${plan.destination} travel plan`}
        >
          Remove trip
        </button>
      </div>
    </article>
  );
}

export default TravelPlanCard;
