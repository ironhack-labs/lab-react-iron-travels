

function PlanCard({
  plan: { destination, description, days, totalCost, image },
}) {
  return (
    <div className="plan-card">
      <img src={image} alt={destination} />
      <h3>{destination}</h3>
      <p>{description}</p>
      <p>Duration: {days} days</p>
      <p>Price: ${totalCost}</p>
    </div>
  );
}

export default PlanCard;
