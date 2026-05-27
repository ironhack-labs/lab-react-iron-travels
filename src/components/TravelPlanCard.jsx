

export const TravelPlanCard = ({destination, deleteTravel, onFavorite}) => {
    return (
        <div key={destination.id} className="destination-component">
            <img src={destination.image} alt="" />
            <div id="destination-details">
                <h3>{destination.destination} ({destination.days} Days)</h3>
                <p>{destination.description}</p>
                <p>Price: {destination.totalCost}€</p>
            <div className="badges-container">
                {destination.totalCost<=350 && <span className="badge-icon great-deal-badge">Great Deal</span>}
                {destination.totalCost>=1500 && <span className="badge-icon premium-badge">Premium</span>}
                {destination.allInclusive && <span className="badge-icon all-inclusive">All Inclusive</span>}
            </div>
            <div className='action-btns'>
                <button onClick={() => {deleteTravel(destination.id)}}>Delete</button>
                <button onClick={() => {onFavorite(destination)}}>♡</button>
            </div>
            </div>
        </div>
    )
}