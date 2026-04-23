function TravelPlanCard({ plan, onDelete }) {
  return (
    <div className="travel-card" style={{ border: "1px solid #ccc", margin: "10px", display: "flex", padding: "10px" }}>
      <img src={plan.image} alt={plan.destination} style={{ width: "200px", height: "150px", objectFit: "cover" }} />

      <div className="travel-info" style={{ marginLeft: "20px" }}>
        <h2>{plan.destination} ({plan.days} Days)</h2>
        <p><em>{plan.description}</em></p>
        <p><strong>Price:</strong> {plan.totalCost} €</p>


        {plan.totalCost <= 350 && <span style={{ background: "green", color: "white", padding: "5px", marginRight: "5px" }}>Great Deal</span>}
        {plan.totalCost >= 1500 && <span style={{ background: "blue", color: "white", padding: "5px" }}>Luxury</span>}
        {plan.allInclusive && <span style={{ background: "green", color: "white", padding: "5px", marginLeft: "5px" }}>All Inclusive</span>}
        
    
        <button onClick={() => onDelete(plan.id)} style={{ display: "block", marginTop: "10px" }}>Delete</button>
      </div>
    </div>
  );
}

export default TravelPlanCard;
