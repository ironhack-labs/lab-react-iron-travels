// Bonus: Iteration 5 | Favorites
function FavoritesList({ favoritePlans }) {
  return (
    <div className="FavoritesList">
      <h2>Favorites</h2>

      <div className="list">
        {favoritePlans &&
          favoritePlans.map((plan) => (
            <div className="FavoritePlanCard" key={plan.id}>
              <div className="top-section">
                <img src={plan.image} />
              </div>
              <div className="bottom-section">
                <h2>
                  {plan.destination}{" "}
                  <span className="sub-heading">({plan.days} Days)</span>
                </h2>
                <p>
                  <b>Price:</b> {plan.totalCost} €{" "}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default FavoritesList;
