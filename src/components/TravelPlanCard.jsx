function TravelPlanCard({ plan, onDelete }) {
  return (
    <li className="travel-plan-card" style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "10px", listStyle: "none" }}>
      <img src={plan.image} alt={plan.destination} width="200" />
      <h3>{plan.destination} ({plan.days} Days)</h3>
      <p>{plan.description}</p>
      <p><strong>Price:</strong> {plan.totalCost} €</p>

      <div className="labels-container" style={{ marginBottom: "10px" }}>
        {plan.totalCost <= 350 && (
          <span className="label great-deal" style={{ background: "green", color: "white", padding: "2px 5px", marginRight: "5px", borderRadius: "3px" }}>
            Great Deal
          </span>
        )}
        {plan.totalCost >= 1500 && (
          <span className="label premium" style={{ background: "blue", color: "white", padding: "2px 5px", marginRight: "5px", borderRadius: "3px" }}>
            Premium
          </span>
        )}
        {plan.allInclusive && (
          <span className="label all-inclusive" style={{ background: "purple", color: "white", padding: "2px 5px", borderRadius: "3px" }}>
            All Inclusive
          </span>
        )}
      </div>
      <button 
        onClick={() => onDelete(plan.id)}
        style={{ background: "red", color: "white", padding: "5px 10px", border: "none", borderRadius: "3px", cursor: "pointer" }}
      >
        Delete
      </button>
    </li>
  );
}

export default TravelPlanCard;