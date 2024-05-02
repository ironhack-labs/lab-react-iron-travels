function TravelPlanCard({ travelInfo, deleteCard }) {

    const greatDeal = travelInfo.totalCost <= 350
    const Premium = travelInfo.totalCost >= 1500

    return (
        <div className="travel-card">
            <img className="travel-pic" src={travelInfo.image} alt={travelInfo.destination} />
            <h2>{travelInfo.destination} ({travelInfo.days} days)</h2>
            <p>{travelInfo.description}</p>
            <p>Price: {travelInfo.totalCost}€</p>
            {greatDeal && <p className="deal-label">Great Deal</p>}
            {Premium && <p className="special-label">Premium</p>}
            {travelInfo.allInclusive && <p className="special-label">All Inclusive</p>}
            <br />
            <button className="btn-delete" type="button" onClick={() => deleteCard(travelInfo.id)}>Delete</button>
        </div>
    )

}

export default TravelPlanCard