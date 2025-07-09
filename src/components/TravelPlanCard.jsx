function TravelPlanCard(props) {
  const greatDeal = <span className="tag2">Great Deal</span>;
  const allInclusive = <span className="tag">All-inclusive</span>;
  const premium = <span className="tag">Premium</span>;

  return (
    <>
      {props.plans.map((plan) => {
        return (
          <div className="card" key={plan.id}>
            <img src={plan.image} alt="place picture" />
            <div>
              <h2>
                {plan.destination} ({plan.days} Days)
              </h2>
              <p>{plan.description}</p>
              <p>
                <strong>Price: </strong>
                {plan.totalCost}€
              </p>
              <div className="tag-container">
                {plan.totalCost <= 350 && <p>{greatDeal}</p>}
                {plan.totalCost >= 1500 && <p>{premium}</p>}
                {plan.allInclusive === true && <p>{allInclusive}</p>}
              </div>
              <button
                onClick={() => {
                  props.callbackToDelete(plan.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default TravelPlanCard;
