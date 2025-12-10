import "./Favorite.css";

function Favorites({ favorites }) {
  return (
    <div className="favorites-section">
      <h2>Favorites</h2>
      {favorites.map((fav) => (
        <div key={fav.id} className="favorite-card">
          <img src={fav.image} alt={fav.destination} />
          <div className="favorite-info">
            <h3>
              {fav.destination} ({fav.days} Days)
            </h3>
            <p>{fav.totalCost} €</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Favorites;