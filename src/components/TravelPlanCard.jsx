function TravelPlanCard({ plan, onDelete, onFavorite, favoriteColors }) {
  let costLabel = "";

  if (plan.totalCost <= 350) {
    costLabel = "Great Deal";
  } else if (plan.totalCost >= 1500) {
    costLabel = "Premium";
  }

  return (
    <li id="destinations">
      <img id="country-Imgs" src={plan.image} alt={plan.destination} />
      <div>
        <h3>
          {plan.destination} - {plan.days} days
        </h3>
        <p>{plan.description}</p>
        <p>{plan.totalCost}$</p>

        {costLabel && (
          <span
            className={`label ${
              costLabel === "Great Deal" ? "great-deal" : "premium"
            }`}
          >
            {costLabel}
          </span>
        )}

        {plan.allInclusive && (
          <span className="label all-inclusive">All Inclusive</span>
        )}

        <button className="delete-btn" onClick={() => onDelete(plan.id)}>
          Delete
        </button>

        <button
          style={{
            backgroundColor: favoriteColors[plan.colorIndex || 0],
            marginLeft: "10px",
          }}
          onClick={() => {
            onFavorite(plan);
            plan.colorIndex =
              ((plan.colorIndex || 0) + 1) % favoriteColors.length;
          }}
        >
          ♡
        </button>
      </div>
    </li>
  );
}

export default TravelPlanCard;
