function TravelPlanCard(props) {
  return (
    <div key={props.place.id} className="TravelList">
      <img className="imageDesti" src={props.place.image} alt="" />

      <div>
        <p>
          <b>
            {props.place.destination} ({props.place.days} Days)
          </b>
        </p>
        <p>{props.place.description}</p>
        <p>Price : {props.place.totalCost} $</p>
        {props.place.totalCost <= 350 ? (
          <span className="greatDeal">Great Deal</span>
        ) : null}
        {props.place.totalCost > 1500 ? (
          <span className="Premium">Premium</span>
        ) : null}
        {props.place.allInclusive ? (
          <span className="Premium">All Inclusive</span>
        ) : null}
        <button onClick={() => props.handleClick(props.place.id)}>
          Delete
        </button>
        <button
          className="favorite"
          onClick={() => props.handleFavorite(props.place.id)}
        >
          favorite
        </button>
      </div>
      <div>{props.favorite}</div>
    </div>
  );
}

export default TravelPlanCard;
