function TravelPlanCard({ plan, handleDelete, fav, handleFavorite }) {
  return (
    <div className="container">
      <div>
        {plan.map((e) => {
          return (
            <div className="card" key={e.id}>
              <img src={e.image} alt="location" />
              <div>
                <h2>
                  {e.destination} ({e.days} days)
                </h2>
                <h3>{e.description}</h3>
                <h3>Price: {e.totalCost}$</h3>
                <div className="badge-container">
                  {e.totalCost < 350 ? (
                    <p className="badge green">Great Deal </p>
                  ) : null}
                  {e.totalCost > 1500 ? (
                    <p className="badge blue">Premium</p>
                  ) : null}
                  {e.allInclusive ? (
                    <p className="badge blue">All Inclusive</p>
                  ) : null}
                </div>
                <button
                  onClick={() => {
                    handleDelete(e.id);
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    handleFavorite(e.id);
                  }}
                >
                  ♡
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <h2>Favorites</h2>
        {fav.map((e) => {
          return (
            <div className="card" key={e.id}>
              <img src={e.image} alt="location" />
              <div>
                <h2>
                  {e.destination} ({e.days} days)
                </h2>
                <h3>{e.description}</h3>
                <h3>Price: {e.totalCost}$</h3>
                <div className="badge-container">
                  {e.totalCost < 350 ? (
                    <p className="badge green">Great Deal </p>
                  ) : null}
                  {e.totalCost > 1500 ? (
                    <p className="badge blue">Premium</p>
                  ) : null}
                  {e.allInclusive ? (
                    <p className="badge blue">All Inclusive</p>
                  ) : null}
                </div>
                <button
                  onClick={() => {
                    handleDelete(e.id);
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    handleFavorite(e.id);
                  }}
                >
                  ♡
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default TravelPlanCard;
