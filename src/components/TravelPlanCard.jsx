export function TravelPlanCard({ plan, onDelete }) {
  return (
    <div className="card">
      <img src={plan.image} className="card-image" alt={plan.destination} />
      <div className="card-content">
        <h2>{plan.destination}</h2>
        <p>{plan.description}</p>
        <p>
          <strong>Price:</strong> {plan.totalCost} €
        </p>
        <div className="tags">
          {/* Show "Great Deal" if the price is 350 or less */}
          {plan.totalCost <= 350 && (
            <div className="tag-greatdeal">
              <p>Great Deal</p>
            </div>
          )}
          {/* Show "Premium" if the price is 1500 or more */}
          {plan.totalCost >= 1500 && (
            <div className="tag-premium">
              <p>Premium</p>
            </div>
          )}
          {/* Show "All Inclusive" if the plan has an all-inclusive package */}
          {plan.allInclusive && (
            <div className="tag-allinclusive">
              <p>All Inclusive</p>
            </div>
          )}
        </div>
        {/* When clicked, call the onDelete function passing the plan's id */}
        <button onClick={() => onDelete(plan.id)}>Delete</button>
      </div>
    </div>
  );
}
