// This is a UI 'template' for each card displayed

function TravelCard({ plan, deletePlan }) {
  // 'Great deal' label
  let costLabel = null;

  if (plan.totalCost <= 350) {
    costLabel = "Great Deal";
  } else if (plan.totalCost >= 1500) {
    costLabel = "Premium";
  }

  return (
    <div className="travel-card-container">
      <img src={plan.image} alt={plan.destination} />

      <div className="travel-card-content">
        <h3>
          {plan.destination} ({plan.days} Days)
        </h3>
        <div className="labels">
          {costLabel && <span className="label">{costLabel}</span>}
          {plan.allInclusive && (
            <span className="label all-inclusive">All Inclusive</span>
          )}
        </div>

        <p>{plan.description}</p>

        <p>
          <strong>Price:</strong> {plan.totalCost} €
        </p>
        <button onClick={() => deletePlan(plan.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TravelCard;
