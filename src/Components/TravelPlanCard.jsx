const TravelPlanCard = (props) => {

  return (
    <div className="card">

      {/* LEFT: IMAGE */}
      <div className="card-image">
        <img src={props.plan.image} alt={props.plan.destination} />
      </div>

      {/* RIGHT: TEXT */}
      <div className="card-text">

        <h3>{props.plan.destination}</h3>

        <p className="description">{props.plan.description}</p>

        <p><strong>{props.plan.days} days</strong></p>
        <p><strong>{props.plan.totalCost} €</strong></p>

        {/* LABELS */}
        {props.plan.totalCost <= 350 && <span>Great Deal </span>}
        {props.plan.totalCost >= 1500 && <span>Premium </span>}
        {props.plan.allInclusive && <span>All Inclusive </span>}

        <div className="buttons">
          <button onClick={() => props.onDelete(props.plan.id)}>Delete</button>
          <button onClick={() => props.onFavorite(props.plan)}>♡</button>
        </div>

      </div>

    </div>
  );
};

export default TravelPlanCard;