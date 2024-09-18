function TravelPlanCard({ eachTravel, onDelete }) {
  return (
    <div className="page">
      <div className="container">
        <div className="img">
          <img className="city" src={eachTravel.image} alt={eachTravel.destination} />
        </div>

        <div className="content">
          <h3>{eachTravel.destination} <span> ({eachTravel.days} days)</span></h3>
          <p>{eachTravel.description}</p>
          <p><strong>Price: </strong>{eachTravel.totalCost} €</p>
          <div className="labels">
            {eachTravel.totalCost >= 1500 ? <label>Premium</label> : null}
            {eachTravel.totalCost <= 350 ? <label className="deal">Great Deal</label> : null}
            {eachTravel.totalCost >= 1500 ? <label>All-inclusive</label> : null}
          </div>
          <button onClick={onDelete}>Borrar</button>
        </div>
      </div>
    </div>
  );
}

export default TravelPlanCard;