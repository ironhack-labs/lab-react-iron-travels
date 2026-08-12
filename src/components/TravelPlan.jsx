function TravelPlan({ plan, onDelete, addFavorite }) {
  return (
    <div className="travel-card">
      <div>
        <img src={plan.image} />
      </div>

      <div className="card-content">
        <h2>
          {plan.destination} {"("}
          {plan.days} Days{")"}
        </h2>
        <p>{plan.description}</p>
        <p>
          <strong>Price: </strong>
          {plan.totalCost} €
        </p>
        <div className="vignettes-zone">
          {plan.totalCost <= 350 && (
            <span className="vignette green-vignette">Great Deal</span>
          )}
          {plan.totalCost >= 1500 && (
            <span className="vignette blue-vignette">Premium</span>
          )}
          {plan.parts.find((part) => part.name === "All-Inclusive Package") && (
            <span className="vignette blue-vignette">All-Inclusive</span>
          )}
        </div>
        <div className="action-buttons">
          <button className="gray-button" onClick={() => onDelete(plan.id)}>
          Delete
        </button>
        <button className="gray-button" onClick={() => addFavorite(plan.id)}>
            ♡
        </button>
        </div>
        
      </div>
    </div>
  );
}

export default TravelPlan;
