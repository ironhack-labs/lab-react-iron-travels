function FavoriteList({ favorites, toggleFavorite }) {
    return (
        <aside>
            <h2>Favourites</h2>
            {favorites.map(viaje => (
                <div key={viaje.id} className="fav-container">
                    <img src={viaje.image} className="fav-card-image" />
                    <h3>{viaje.destination} ({viaje.days} days)</h3>
                    <p>Price: {viaje.totalCost} €</p>
                </div>
            ))}
        </aside>
    );
}

export default FavoriteList;
