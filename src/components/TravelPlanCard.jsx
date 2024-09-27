export const TravelPlanCard = ({ plan, deletePlan }) => {
  return (
    <div className="destination-card">
      <img className="img" src={plan.image}></img>
      <div className="text">
        <h3 className="name-days">
          {plan.destination} ({plan.days} Days)
        </h3>
        <div>{plan.description}</div>
        <div>
          <span>Price: </span>
          {plan.totalCost} €
        </div>
        {plan.totalCost <= 350 ? (
          <button>Great Deal</button>
        ) : (
          <button>Premium</button>
        )}
        <button onClick={() => deletePlan(plan.id)}>Delete</button>
      </div>
    </div>
  );
};
