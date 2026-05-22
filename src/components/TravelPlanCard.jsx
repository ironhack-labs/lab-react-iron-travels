function TravelPlanCard({ travel, handleDelete }) {
  const { id, destination, days, description, image, totalCost } = travel;

  const cardStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    border: "1px solid #ccc",
    borderRadius: "8px",
    margin: "20px auto",
    padding: "15px",
    width: "600px",
    gap: "20px",
    textAlign: "left",
  };

  const imgStyle = {
    width: "200px",
    height: "180px",
    objectFit: "cover",
    borderRadius: "4px",
  };

  const infoStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flexGrow: 1,
  };

  const labelsContainerStyle = {
    display: "flex",
    gap: "8px",
    marginTop: "10px",
    marginBottom: "15px",
  };

  const baseLabelStyle = {
    color: "white",
    padding: "3px 8px",
    borderRadius: "4px",
    fontSize: "12px",
    fontWeight: "bold",
    display: "inline-block",
    textTransform: "uppercase",
  };

  const labelGreenStyle = {
    ...baseLabelStyle,
    backgroundColor: "#2e7d32",
  };

  const labelBlueStyle = {
    ...baseLabelStyle,
    backgroundColor: "#1565c0",
  };

  const buttonsContainerStyle = {
    display: "flex",
    justifyContent: "flex-start",
    marginTop: "auto",
  };
  return (
    <div key={id} className="travel-card" style={cardStyle}>
      <img src={image} alt={destination} style={imgStyle} />
      <div className="travel-info" style={infoStyle}>
        <div className="text-content">
          <h3 style={{ margin: "0 0 10px 0" }}>
            {destination} ({days} Days)
          </h3>
          <p style={{ margin: "5px 0" }}>
            <em>{description}</em>
          </p>
          <p style={{ margin: "5px 0" }}>
            <strong>Price:</strong> {totalCost}€
          </p>
        </div>

        <div className="labels" style={labelsContainerStyle}>
          {totalCost <= 350 && (
            <span style={labelGreenStyle}>Great Deal</span>
          )}
          {totalCost >= 1500 && (
            <span style={labelBlueStyle}>Premium</span>
          )}
        </div>
        <div className="buttons" style={buttonsContainerStyle}>
          <button onClick={(event) => handleDelete(event, id)}>
            ❌ Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TravelPlanCard;
