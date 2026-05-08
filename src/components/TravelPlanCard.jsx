function TravelPlanCard({ plan, deleteAction, favoriteAction }) {
  return (
    <div className="travel-card" style={cardStyle}>
      <img src={plan.image} alt={plan.destination} style={imageStyle} />
      <div style={{ flex: 1 }}>
        <h3>{plan.destination} ({plan.days} Days)</h3>
        <p><i>{plan.description}</i></p>
        <p><strong>Price:</strong> {plan.totalCost} €</p>

        <div style={{ display: "flex", gap: "8px", margin: "10px 0" }}>
          {plan.totalCost <= 350 && <span style={labelGreen}>Great Deal</span>}
          {plan.totalCost >= 1500 && <span style={labelBlue}>Premium</span>}
          {plan.allInclusive && <span style={labelBlue}>All-inclusive</span>}
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={() => deleteAction(plan.id)} style={btnStyle}>Delete</button>
          <button onClick={() => favoriteAction(plan)} style={btnStyle}>♡</button>
        </div>
      </div>
    </div>
  );
}

// Estilos repetidos (podes mover para um ficheiro CSS depois)
const cardStyle = { display: "flex", gap: "20px", border: "1px solid #ddd", borderRadius: "8px", padding: "15px", marginBottom: "15px" };
const imageStyle = { width: "200px", height: "120px", objectFit: "cover", borderRadius: "4px" };
const labelGreen = { backgroundColor: "#3fb871", color: "white", padding: "2px 8px", borderRadius: "4px", fontSize: "0.8rem" };
const labelBlue = { backgroundColor: "#2e61a5", color: "white", padding: "2px 8px", borderRadius: "4px", fontSize: "0.8rem" };
const btnStyle = { padding: "5px 10px", cursor: "pointer", borderRadius: "4px", border: "1px solid #ccc" };

export default TravelPlanCard;
