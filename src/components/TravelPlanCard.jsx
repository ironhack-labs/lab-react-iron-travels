function TravelPlanCard(props) {
    const { travel } = props; 
    return (
        <div className="travel-card">
            <div>
                <img src={travel.image} className="travelPic" /></div>
            <div>
                <h3>{travel.destination} ({travel.days} days)</h3>
                <p>{travel.description}</p>
                <p>Price: {travel.totalCost} €</p>

                {travel.allInclusive && <button className="premium-label">All Inclusive</button>}
                {travel.totalCost >= 1500 && <button className="premium-label">Premium</button>}
                {travel.totalCost <= 350 && <button className="deal-label">Great Deal</button>}

                <button onClick={() => clickToDelete(travel.id)} className="delete-btn">Delete</button>
            </div>
        </div>

    )
}

export default TravelPlanCard