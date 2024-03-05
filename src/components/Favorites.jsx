const Favorites = ( {favorite} ) => {
    return (
        <div className="favorite">
            <img className="favorite-img" src={favorite.image} alt="favorite" />
            <h2>
                {favorite.destination} ({favorite.days} Days)
            </h2>

            <p>{favorite.totalCost} €</p>
        </div>
    )
}

export default Favorites; 