function TravelElement ({id ,image, destination, days, description, totalCost, onDelete}) {
    const getDealTags = () => {
        if (totalCost > 350) {
            return (
                <span className = "premium-tag">Premium</span>
            )
        } else {
            return (
                <span className = "budget-tag">Great Deal</span>
            ) 
        }
    }
    const getAllInclTag = () => {
        return (
            <span className="all-inclusive-tag">All-Inclusive</span>
        )
    }

    return (
        <div className ="offer-list-element">
            <img className ="offer-img" src={image} alt="Destination Pic"/>
            <div className = "offer-text">
                <h3 className = "bold">{destination} ({days} days)</h3>
                <p>{description}</p>
                <p><span className = "bold">Price: </span>{totalCost}€</p>
                <p>{getDealTags()} {getAllInclTag()}</p>
                <button className="delete-button" onClick = {()=> onDelete(id)}>Delete</button>
            </div>

        </div>
    )
}

export default TravelElement;
