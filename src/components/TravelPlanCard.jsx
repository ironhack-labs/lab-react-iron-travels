import "./TravelPlanCard.css";

const TravelPlanCard = ({ plan, onDeleteClick }) => {
  return (
    <>
      <img src={plan.image} alt="image" />
      <div className="right-side">
        <h3>
          {plan.destination} {`(${plan.days} Days)`}
        </h3>
        <p>{plan.description}</p>
        <p>
          <b>Price:</b>
          {plan.totalCost}
        </p>

        {plan.totalCost <= 350 && <div className="great-deal">Great Deal</div>}
        {plan.totalCost >= 1500 && <div className="premium-deal">Premium</div>}
        {plan.allInclusive && (
          <div className="all-inclusive">All Inclusive</div>
        )}

        <button type="button" onClick={onDeleteClick} className="delete-btn">
          Delete
        </button>
      </div>
    </>
  );
};

export default TravelPlanCard;
