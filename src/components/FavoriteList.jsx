export const FavoriteList = ({ travelsArr }) => {
  return (
    <div className="favorites-container">
      <h2>Favorites</h2>
      {travelsArr.map((travel) => {
        return (
          travel.favorite && (
            <div key={travel.id} className="favorite">
              <div className="img-container">
                <img src={travel.image} alt="Travel picture" />
              </div>
              <h3>
                {travel.destination} ({travel.days} Days)
              </h3>
              <p>{travel.totalCost} €</p>
            </div>
          )
        );
      })}
    </div>
  );
};
