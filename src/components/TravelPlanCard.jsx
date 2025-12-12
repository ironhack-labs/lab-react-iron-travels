const TravelPlanCard = ({ plan, onDelete }) => {
  console.log("TravelPlanCard render:", plan?.id);

  const destination = plan.destination;
  const description = plan.description;
  const totalCost = plan.totalCost;
  const allInclusive = plan.allInclusive;

  const costLabel =
    totalCost <= 350 ? "Great Deal" : totalCost >= 1500 ? "Premium" : null;

  return (
    <article
      className="travel-card"
      style={{ border: "1px solid #ddd", padding: 14, marginBottom: 12 }}
    >
      <div style={{ display: "flex", gap: 12 }}>
        <div style={{ minWidth: 200 }}>
          <img
            src={plan.image}
            alt={destination}
            style={{ width: "100%", borderRadius: 6 }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <h3>
            {destination} ({plan.days} days)
          </h3>
          <p style={{ fontStyle: "italic" }}>{description}</p>
          <p>
            <strong>Price:</strong> {totalCost} €
          </p>
          <div style={{ marginTop: 8 }}>
            {costLabel && <span style={{ marginRight: 8 }}>{costLabel}</span>}
            {allInclusive && <span>All Inclusive</span>}
          </div>
          <div style={{ marginTop: 10 }}>
            <button
              onClick={() => onDelete(plan.id)}
              style={{ marginRight: 8 }}
            >
              Delete
            </button>
            <button>♡</button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TravelPlanCard;
