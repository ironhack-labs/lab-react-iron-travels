function TravelPlanCard (props) {
    const {item, handleDelete, dealOrNoDeal} = props
    return (
<div key={item.id} className="trip-div">
            <img src={item.image} alt="pic" className="trip-pic" />
            <div className="text-div">
              <h3>
                {item.destination} ({item.days} days)
              </h3>
              <i>{item.description}</i>
              <p>Price: {item.totalCost} € </p>
              <div className="labels">
                <span>{dealOrNoDeal(item.totalCost)}</span>
                {item.allInclusive && (
                  <span className="inclusive">All inclusive </span>
                )}
                </div>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="delete-button"
                >
                  Delete
                </button>
             
            </div>
            </div>
    )
}

export default TravelPlanCard;