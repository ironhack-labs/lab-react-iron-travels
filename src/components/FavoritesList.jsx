function FavoritesList({ favorites }) {
  return (
    <ul className="favorite-list">
      {favorites.map((fav) => (
        <li key={fav.id} className="favorite-item">
          <img className="favorite-img" src={fav.image} alt={fav.destination} />
          <p>
            {fav.destination} ({fav.days} Days)
          </p>
          <p>{fav.totalCost} €</p>
        </li>
      ))}
    </ul>
  );
}

export default FavoritesList;
