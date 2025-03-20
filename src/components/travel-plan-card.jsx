function TravelPlanCard({ plan, onDelete, onFavorite }) {
    return (
      <article>
        <h3>{plan.destination}</h3>
        <p>{plan.description}</p>
        <p>Price: ${plan.totalCost}</p>
  
        {plan.totalCost <= 350 && <span>Great Deal</span>}
        {plan.totalCost >= 1500 && <span>Premium</span>}
        {plan.allInclusive && <span>All Inclusive</span>}
  
        <button onClick={() => onDelete(plan.id)}>Delete</button>
        <button onClick={() => onFavorite(plan)}>♡</button>
      </article>
    );
  }
  
  export default TravelPlanCard;
  