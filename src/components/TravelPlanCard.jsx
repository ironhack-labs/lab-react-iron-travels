import "../index.css";

export default function TravelPlanCard({ trip, remove, addToFavorite }) {
  return (
    <div className="cardContainer">
      <figure>
        <img src={trip.image} alt={trip.destination} />
      </figure>
      <div className="descrWrapper">
        <div>
          <h3 className="descrWrapper_header">
            {trip.destination} <span>({trip.days} days)</span>
          </h3>
          <p className="descrWrapper_tripDescr">{trip.description}</p>
          <p className="descrWrapper_total">
            <span>Price:</span>
            {trip.totalCost}
          </p>
          {trip.totalCost <= 350 && (
            <span className="great_deal">Great Deal</span>
          )}
          {trip.totalCost >= 1500 && <span className="premium">Premium</span>}
          {trip.allInclusive && <span className="premium">All-Inclusive</span>}
        </div>
        <div className="buttons_wrapper">
          <button
            className="remove_button"
            type="button"
            onClick={() => remove(trip.id)}
          >
            Delete
          </button>
          <button
            className="favorite_button"
            type="button"
            onClick={() => addToFavorite(trip)}
          >
            ♡
          </button>
        </div>
      </div>
    </div>
  );
}
