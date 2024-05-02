const TravelCard = ({ plan }) => {
  return (
    <div className="travelCard">
      <img src={plan.image} />
      <div className="text">
        <button
          type="button"
          className="deleteButton"
          onClick={plan.deleteFunction}
        >
          X
        </button>
        <h1>
          {plan.destination} ({plan.days} Days)
        </h1>
        <h2>{plan.description}</h2>
        <p>
          <b>Price:</b> {plan.totalCost} €
        </p>
        {plan.totalCost <= 350 && <button className="deal">Great Deal</button>}
        {plan.totalCost >= 1500 && <button className="premium">Premium</button>}
        {plan.allInclusive && (
          <button className="allinclusive">All Inclusive</button>
        )}
        <div>
          <button className="favoriteButton">Favorite</button>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;
