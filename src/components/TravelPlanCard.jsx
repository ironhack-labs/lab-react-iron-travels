const TravelPlanCard = ({ plan, deleteBtn }) => {
  return (
    <div id="travelCard">
      <img src={plan.image} alt={plan.destination} />
      <div>
        <h1>
          {plan.destination} ({plan.days} Days)
        </h1>
        <p id="description">{plan.description}</p>
        <p>
          <strong>Price:</strong> {plan.totalCost}€
        </p>
        <div>
          {plan.totalCost <= 350 && <span id="greatDeal">Great Deal!</span>}
          {plan.totalCost >= 1500 && <span id="premiumDeal">Premium</span>}
          {plan.allInclusive && (
            <span id="allInclusiveDeal">All-Inclusive</span>
          )}
        </div>
        <button onClick={() => deleteBtn(plan.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TravelPlanCard;
