const TravelCard = ({ image, destination, days, description, totalCost, allInclusive, id, removeTravel, addFavoriteTravel }) => {
    return (
        <div className="travelCard">
            <img src={image} className="imageTravelCard"></img>
            <div className="travelCardBox">
                <div className="travelCardText">
                    <p className="titleTravelCard">{destination} ({days} Days)</p>
                    <p className="textTravelCard">{description}</p>
                    <p className="priceTotalCost">Price: {totalCost}€</p>
                    <div className="tagBox">
                        {totalCost < 350 ? <div className="greatDealBox">Great Deal</div> : null}
                        {totalCost > 1500 ? <div className="premiumBox">Premium</div> : null}
                        {allInclusive ? <div className="allInclusiveBox">All-inclusive</div> : null}
                    </div>
                </div>
                <div className="buttons">
                    <div className="deleteTravelCardBox">
                        <button className="deleteTravelCard" onClick={() => removeTravel(id)}>Delete</button>
                    </div>
                    <button className="favoriteTravelButton" onClick={() => addFavoriteTravel(id)}>♡</button>
                </div>


            </div>

        </div >
    )
}

export default TravelCard