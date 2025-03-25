function TravelPlanCard({ plan, onDelete, onFavorite, color }) {
    return (
      <li style={{ marginBottom: "20px" }}>
        <img src={plan.image} alt={plan.destination} width="150" />
        <h3>{plan.destination}</h3>
        <p>{plan.description}</p>
  
        {/* Labels */}
        <div>
          {plan.totalCost <= 350 && <span>Great Deal </span>}
          {plan.totalCost >= 1500 && <span>Premium </span>}
          {plan.allInclusive && <span>All Inclusive </span>}
        </div>
  
        {/* Action buttons */}
        <div style={{ marginTop: "8px" }}>
          <button onClick={() => onDelete(plan.id)}>Delete</button>
          <button
            onClick={() => onFavorite(plan)}
            style={{ backgroundColor: color, marginLeft: "10px" }}
          >
            ♡
          </button>
        </div>
      </li>
    );
  }
  
  export default TravelPlanCard;  