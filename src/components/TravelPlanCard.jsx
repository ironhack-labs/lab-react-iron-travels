

function TravelPlanCard({ plan, onDelete, onToggleFavorite, isFavorite, favoriteColor }) {
  const labels = [];
  
  // Determine labels based on conditions
  if (plan.totalCost <= 350) {
    labels.push("Great Deal");
  }
  if (plan.totalCost >= 1500) {
    labels.push("Premium");
  }
  if (plan.allInclusive) {
    labels.push("All-Inclusive");
  }

  return (
    <div className="travel-card">
      <div className="image-container">
        <img src={plan.image} alt={`${plan.destination} view`} />
        <div className="card-actions">
          <button 
            className="favorite-btn"
            onClick={() => onToggleFavorite(plan.id)}
            style={{ backgroundColor: favoriteColor }}
            aria-label={`${isFavorite ? 'Remove from' : 'Add to'} favorites`}
          >
            ♡
          </button>
          <button 
            className="delete-btn"
            onClick={() => onDelete(plan.id)}
            aria-label={`Delete ${plan.destination} trip`}
          >
            ×
          </button>
        </div>
      </div>
      <div className="card-content">
        <h2>{plan.destination} ({plan.days} Days)</h2>
        <p className="description">{plan.description}</p>
        
        {/* Labels Section */}
        {labels.length > 0 && (
          <div className="labels-container">
            {labels.map((label, index) => (
              <span key={index} className={`label ${label.toLowerCase().replace('-', '')}`}>
                {label}
              </span>
            ))}
          </div>
        )}
        
        <p className="price">Price: {plan.totalCost} €</p>
      </div>
    </div>
  );
}

export default TravelPlanCard;