const TravelPlanCard = ({ plan, onDelete, onLikeToggle }) => {
  const badgeText =
    plan.totalCost < 350
      ? "Great Deal"
      : plan.totalCost > 1500
      ? "Premium"
      : "";

  return (
    <div className="card">
      <div className="image">
        <img src={plan.image} alt={plan.destination} />
      </div>
      <div className="content">
        <h2>
          {plan.destination} ({plan.days} Days)
        </h2>
        <p>{plan.description}</p>
        <p>
          <strong>Price</strong> {plan.totalCost} €
        </p>

        <div className="badges">
          {badgeText && <button>{badgeText}</button>}
          {plan.allInclusive && <button>All-Inclusive</button>}
        </div>

        <div className="buttons">
          <button onClick={() => onDelete(plan.id)}>Delete</button>
          <button style={{padding: ".5rem"}} onClick={() => onLikeToggle(plan.id)}>
            {plan.liked ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelPlanCard;
