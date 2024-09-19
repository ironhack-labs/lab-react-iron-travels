
function TravelPlanCard(props) {

  // Destructurar los parámetros desde aquí:
  // o no

  return (
    
    <div key={props.plan.index} className="travel-card">
      <img src={props.plan.image} alt={props.plan.destination} className="travel-image" />
      <div className="travel-info">
        <h2>{props.plan.destination} ({props.plan.days} Days)</h2>
        <p>{props.plan.description}</p>
        <p><strong>Price:</strong> {props.plan.totalCost} €</p>

        {props.plan.totalCost <= 350 ? (<button className="btn" id="offert">Great Deal</button>): null}
        {props.plan.totalCost >= 1500 ? (<button className="btn">Premium</button>): null}
        {props.plan.allInclusive ? (<button className="btn">All-Inclusive</button>): null}

        <br />

        <button className="btn" id="btn-delete" onClick={props.delete}>Eliminar</button>
        <button className="btn" id="btn-fav" onClick={props.addFav}>♡</button>
      </div>
    </div>

    

    
    
  )
}

export default TravelPlanCard