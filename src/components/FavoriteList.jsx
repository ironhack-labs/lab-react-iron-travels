export const FavoriteList = ({favorites})=> {
    return (
        <div className="favorite-list-container">
            { favorites.map((favorite) => {
                return(
                    <div className='favorite-card'>
                        <img src={favorite.image} alt="" />
                        <p>{favorite.destination}</p>
                        <p>{favorite.totalCost}</p>
                    </div>
                )
            })
            }
        </div>
    )
}