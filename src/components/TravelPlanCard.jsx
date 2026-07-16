function TravelPlanCard({ plan }) {
  return (
    <>
      <img
        className="travel-plan-image"
        src={plan.image}
        alt={plan.destination}
      />

      <div className="travel-plan-body">
        <h3 className="travel-plan-title">
          {plan.destination} ({plan.days} Days)
        </h3>

        <p className="travel-plan-description">{plan.description}</p>

        <p className="travel-plan-price">
          <b>Price:</b> {plan.totalCost} €
        </p>

        <div className="travel-plan-labels">
          {plan.totalCost <= 350 && (
            <span className="label label-deal">Great Deal</span>
          )}
          {plan.totalCost >= 1500 && (
            <span className="label label-premium">Premium</span>
          )}
          {plan.allInclusive && (
            <span className="label label-inclusive">All-Inclusive</span>
          )}
        </div>
      </div>
    </>
  );
}

export default TravelPlanCard;
