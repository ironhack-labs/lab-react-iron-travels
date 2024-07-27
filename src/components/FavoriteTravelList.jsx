const FavoriteTravelList = ({ image, destination, days, totalCost }) => {
    return (
        <div className="mainFavoriteTravelList">
            <img src={image} className="imageFavoriteTravelList"></img>
            <p className="nameFavoriteTravelList">{destination} ({days} Days)</p>
            <p className="priceTotalCostFavoriteTravelList">{totalCost}€</p>
        </div>
    )
}

export default FavoriteTravelList