import "./TravelList.css";

function TravelPlanCard({ plan, onDelete, onFavorite, getPriceLabel }) {
  const priceLabel = getPriceLabel(plan.totalCost);

  return (
    <div className="travel-card">
      {/* IMAGE */}
      <img src={plan.image} alt={plan.destination} className="travel-image" />

      {/* DETAILS */}
      <div className="travel-details">
        <h2>
          {plan.destination}, {plan.country} ({plan.days} days)
        </h2>

        {/* LABELS */}
        <div className="labels">
          {priceLabel && <span className="label">{priceLabel}</span>}
          {plan.allInclusive && (
            <span className="label inclusive">All Inclusive</span>
          )}
        </div>

        <p className="description">{plan.description}</p>
        <p className="price">Cost: {plan.totalCost} €</p>

        {/* BUTTON ROW */}
        <div className="card-buttons">
          {/* Delete button */}
          <button className="delete-btn" onClick={() => onDelete(plan.id)}>
            Delete
          </button>

          {/* Favorite button */}
          <button
            className="favorite-btn"
            style={{ backgroundColor: plan.color }}
            onClick={() => onFavorite(plan.id)}
          >
            ♡
          </button>
        </div>
      </div>
    </div>
  );
}

export default TravelPlanCard;
