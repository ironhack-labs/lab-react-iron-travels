function TravelPlanCard(props) {
  return (
    <div>
      <h2>{props.plan.destination}</h2>

      <img
        src={props.plan.image}
        alt={props.plan.destination}
      />

      <p>Duration: {props.plan.days} days</p>
      <p>Total cost: {props.plan.totalCost} €</p>
      <p>{props.plan.description}</p>

      {props.plan.totalCost <= 350 && <p>Great Deal</p>}
      {props.plan.totalCost >= 1500 && <p>Premium</p>}
      {props.plan.allInclusive && <p>All Inclusive</p>}

      <button onClick={() => props.onDelete(props.plan.id)}>
  Delete
</button>
    </div>
  );
}

export default TravelPlanCard;