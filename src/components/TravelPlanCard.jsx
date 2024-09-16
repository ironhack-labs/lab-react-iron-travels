const getLabelStyle = ({ color, bgColor }) => ({
  backgroundColor: bgColor,
  padding: "5px 6px 7px 6px",
  borderRadius: "5px",
  fontWeight: "bold",
  fontSize: "0.8rem",
  color: color,
  marginRight: "5px",
});

const TravelCard = ({ plan, deleteItem, toFavorites }) => { 
  return (
    <div
      className="travel-card"
      style={{
        border: "1px solid black",
        padding: "1rem",
        maxWidth: "600px",
        margin: "10px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "left" }}>
        <img
          src={plan.image}
          alt={plan.destination}
          style={{
            width: "50%",
            height: "auto",
            minHeight: "250px",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            marginLeft: "1rem",
          }}
        >
          <h3 style={{ marginTop: "0" }}>
            {plan.destination} ({plan.days} Days)
          </h3>
          <p style={{ fontStyle: "italic" }}>{plan.description}</p>
          <p>
            <span style={{ fontWeight: "bold" }}>Price:</span>{" "}
            {plan.totalCost}€
          </p>
          <div>
            {plan.totalCost <= 350 && (
              <span
                style={getLabelStyle({
                  color: "black",
                  bgColor: "light-green",
                })}
              >
                Great Deal
              </span>
            )}
            {plan.totalCost >= 1500 && (
              <span style={getLabelStyle({ color: "white", bgColor: "blue" })}>
                Premium
              </span>
            )}
            {plan.totalCost >= 1500 && (
              <span style={getLabelStyle({ color: "white", bgColor: "blue" })}>
                All Inclusive
              </span>
            )}

            <div style={{display: "flex", justifyContent: "space-between"}}>
              <button
                style={{
                  marginTop: "1rem",
                  background: "gray",
                  padding: "5px 10px",
                }}
                onClick={() => deleteItem(plan.id)}
              >
                Delete
              </button>
              <button
                style={{
                  marginTop: "1rem",
                  background: "gray",
                  padding: "5px 10px",
                }}
                onClick={() => toFavorites(plan.id)}
              >
                ♡
              </button>             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TravelCard;
