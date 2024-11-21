function Favorites ({favorites}) {
    return (
        <div className="FavoritesList">
        <h2>Favorites</h2>
        {favorites.map((favorite) => (
          <div key={favorite.id} className="FavoriteItem">
            {favorite.destination}
          </div>
    ))}
    </div>
)}



export default Favorites; 