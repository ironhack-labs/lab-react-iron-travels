const TravelCard = ({ location, deleteLocation, addFavorite }) => {
    const returnDeal = (price) => {
      if (price <= 350) {
        return <div className="great">Great Deal</div>;
      } else if (price > 1500) {
        return <div className="premium">Premium</div>;
      } else {
        return null;
      }
    };
  
    const returnInclusive = (value) => {
      if (value) {
        return <div className="premium">All Inclusive</div>;
      } else {
        return null;
      }
    };
  
    return (
      <div className="travel-card" key={location.id}>
        <img src={location.image} alt="location" />
  
        <div className="right">
          <div className="right-container">
            <h2>
              {location.destination} ({location.days} Days)
            </h2>
  
            <em>{location.description}</em>
  
            <p>
              <span className="strong">Price:</span> {location.totalCost} €
            </p>
            <div className="results">
              {returnDeal(location.totalCost)}
  
              {returnInclusive(location.allInclusive)}
            </div>
          </div>
          <div className="buttons">
            <button onClick={() => deleteLocation(location.id)}>Delete</button>
            <button onClick={() => addFavorite(location.id)}>♡</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default TravelCard;
  