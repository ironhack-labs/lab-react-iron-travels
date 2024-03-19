import "./TravelList.css";

const TravelList = (props) => {
  return (
    <div className="travel-list">
      <div className="image">
        <img src={props.travel.image} alt="image" className="picture" />
      </div>
      <div className="information">
        <h1 className="title">
          {props.travel.destination} ({props.travel.days} days)
        </h1>
        <p>
          <i>{props.travel.description}</i>
        </p>
        <p>
          <b>Price:</b> {props.travel.totalCost} €
        </p>
        <div className="tags">
          {props.travel.totalCost > 350 ? (
            <button className="premium" disabled>
              Premium
            </button>
          ) : (
            <button className="great-deal" disabled>
              Great Deal
            </button>
          )}{" "}
          {props.travel.allInclusive === true && (
            <button className="all-inclusive" disabled>
              All Inclusive
            </button>
          )}
        </div>
        <div className="actions">
          <button
            className="delete"
            onClick={() => {
              props.removeTravel(props.travel.id);
            }}
          >
            Delete
          </button>
          <button
            className="favorite"
            onClick={() => props.addToFavorite(props.travel.id)}
          >
            ♡
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelList;
