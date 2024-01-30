export default function TravelPlanCard({ plan, deleteTravel }) {
  function generateCostLabel(totalCost) {
    if (totalCost <= 350) {
      return <span className="Label">Great Deal</span>;
    } else if (totalCost >= 1500) {
      return <span className="Label">Premium</span>;
    }
  }

  return (
    <div className="TravelCard" key={plan.id}>
      <img src={plan.image} />
      <div className="travel-info">
        <h3>
          {plan.destination}, {plan.days} days
        </h3>
        <p>{plan.description}</p>
        <p>
          <b>Price:</b> {plan.totalCost} €
        </p>
        <div className="Labels">
          {generateCostLabel(plan.totalCost)}
          {plan.allInclusive && <span className="Label">All-inclusive</span>}
        </div>
        <div className="edit-travel">
          <button onClick={() => deleteTravel(plan.id)}>Delete</button>
          <button>♡</button>
        </div>
      </div>
    </div>
  );
}
