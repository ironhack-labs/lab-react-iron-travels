// TravelPlanCard.jsx
export const TravelPlanCard = ({ plan, deleteBtn, favoriteBtn }) => {
  const { destination, id, description, totalCost, allInclusive } = plan;

  return (
    <div className="travel-card">
      <img src={plan.image} alt={plan.destination} />
      <div className="card-content">
        <h3>
          {destination} ({plan.days} days)
        </h3>
        <p>{description}</p>
        <p>
          <strong>Price: </strong>
          {totalCost} $
        </p>
        <div className="labels">
          {totalCost <= 350 && (
            <span className="label-great-deal">Great Deal</span>
          )}
          {totalCost >= 1500 && <span className="label-premium">Premium</span>}
          {allInclusive && (
            <span className="label-all-inclusive">All Inclusive</span>
          )}
        </div>
        {/* Ensure these are event handlers and not triggering state during render */}
        <button className="btn" onClick={() => deleteBtn(id)}>
          Delete
        </button>
        <button className="favorite-btn" onClick={favoriteBtn}>
          ♡
        </button>
      </div>
    </div>
  );
};
