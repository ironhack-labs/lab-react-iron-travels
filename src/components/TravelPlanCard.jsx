function TravelPlanCard({ plan, deleteItem }) {
  const cardStyle = {
    width: 800,
    border: "2px solid",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    color: "black",
    textAlign: "left",
    padding: 20,
    margin: 20,
  };

  const greatDealStyle = {
    backgroundColor: "#7ee787",
    width: "100px",
    padding: "5px 10px",
    borderRadius: "8px",
    textAlign: "center",
    display: "inline-block",
    marginRight: 10,
  };

  const premiumStyle = {
    backgroundColor: "#1f6feb",
    width: "100px",
    padding: "5px 10px",
    borderRadius: "8px",
    textAlign: "center",
    display: "inline-block",
    color: "white",
    marginRight: 10,
  };

  const allInclusiveStyle = {
    backgroundColor: "#1f6feb",
    width: "100px",
    padding: "5px 10px",
    borderRadius: "8px",
    textAlign: "center",
    display: "inline-block",
    color: "white",
    marginRight: 10,
  };

  const buttonStyle = {
    backgroundColor: "#9198a1",
    color: "black",
  };

  return (
    <div key={plan.id} style={cardStyle}>
      <div>
        <img src={plan.image} alt="image" style={{ width: 400 }} />
      </div>
      <div>
        <h3>
          {plan.destination} ({plan.days} Days)
        </h3>
        <p>
          <i>{plan.description}</i>
        </p>
        <p>
          <strong>Price:</strong> {plan.totalCost} €
        </p>
        {plan.totalCost <= 350 && (
          <span style={greatDealStyle}>
            <strong>Great deal</strong>
          </span>
        )}
        {plan.totalCost >= 1500 && (
          <span style={premiumStyle}>
            <strong>Premium</strong>
          </span>
        )}

        {plan.allInclusive === true && (
          <span style={allInclusiveStyle}>
            <strong>All-Inclusive</strong>
          </span>
        )}
      </div>
      <div>
        <button onClick={() => deleteItem(plan.id)} style={buttonStyle}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TravelPlanCard;
