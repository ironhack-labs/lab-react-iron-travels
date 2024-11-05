import "./TravelPlanCard.css"

const TravelPlan = ({ id, image, destination, description, days, totalCost, allInclusive, deleteTravelPlan }) => {

    return (
        <div className="TravelPlan">
            <article>
                <img src={image} alt="Image" />
                <div className="info">
                    <h3>{destination} ({days} Days)</h3>
                    <p className="description">{description}</p>
                    <p><strong>Price: </strong>{totalCost}€</p>
                    <div className="labels">
                        <p className="all-inclusive" style={{ display: allInclusive ? 'block' : 'none' }}>{allInclusive ? 'All-inclusive' : null}</p>
                        <p className="great-deal" style={{ display: totalCost <= 350 ? 'block' : 'none' }}>{totalCost <= 350 ? 'Great Deal' : null}</p>
                        <p className="premium" style={{ display: totalCost >= 1500 ? 'block' : 'none' }}>{totalCost >= 1500 ? 'Premium' : null}</p>
                    </div>
                    <button onClick={() => deleteTravelPlan(id)}>Delete</button>
                </div>
            </article>
        </div>
    )
}

export default TravelPlan