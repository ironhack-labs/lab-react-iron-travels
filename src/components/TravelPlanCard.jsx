
function TravelPlanCard(props) {
  return (
    <div>
      <li key={props.plan.id} className="card">
          <img style={{ width: "380px" }} src={props.plan.image} alt="foto" />
          <div className="texto">
            <h4>
              {props.plan.destination} ({props.plan.days} days)
            </h4>
            <p style={{ fontStyle: "italic" }}>{props.plan.description}</p>
            <p>
              <strong>Price:</strong> {props.plan.totalCost} €
            </p>

            <div className="label">
            {props.plan.totalCost <= 350 ? (
              <div>
                <p className="great-deal">Great Deal</p>
              </div>
            ) : props.plan.totalCost >= 1500 ? (
              <div>
                <p className="premium">Premium</p>
              </div>
            ) : null}

            {props.plan.allInclusive === true ? (
              <div>
                <p className="premium">All Inclusive</p>
              </div>
            ) : null}
            </div>

            <div className="delete">
              <button onClick={() => props.handleDeleteTarjeta(props.index)}>Delete</button>
              <button onClick={() => props.handleAddFav(props.plan)} id="like">♡</button>
            </div>
          </div>
        </li>
    </div>
  )
}

export default TravelPlanCard