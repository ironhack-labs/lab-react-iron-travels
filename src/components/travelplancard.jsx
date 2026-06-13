function TravelPlanCard({ plan, deletePlan, addFavoritePlans }) {
  return (
    <div>
      <img src={plan.image} alt={plan.destination} />
      <h3>{plan.destination}</h3>
      <p>{plan.days} days</p>
      <p>{plan.totalCost}€</p>
      <p>{plan.description}</p>
      <p>{plan.totalCost <= 350 ? "Great Deal" : ""} </p>
      <p>{plan.totalCost >= 1500 ? "Premium" : ""} </p>
      <p>{plan.allInclusive ? "All Inclusive" : ""}</p>
      <button onClick={() => deletePlan(plan.id)}>Delete</button>
      <p></p>
      <button onClick={() => addFavoritePlans(plan)}>❤️</button>
      <p></p>
    </div>
  );
}

export default TravelPlanCard;
