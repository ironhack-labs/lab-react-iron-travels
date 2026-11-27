import "./travelList.css"

function TravelPlanCard({ plan, handleDelete, handleLike }) {
  return (
    <li className="li">
      <div className="img">
        <img src={plan.image} />
      </div>

      <div className="information">
        <h1>{plan.destination} ({plan.days} Days)</h1>
        <p className="description">{plan.description}</p>
        <p><strong>Price:</strong> {plan.totalCost}€</p>

        <div>
          {plan.totalCost <= 350 && <span className="greatDeal">Great Deal</span>}
          {plan.totalCost >= 1500 && <span className="label">Premium</span>}
          {plan.allInclusive && <span className="label">All-Inclusive</span>}
        </div>

        <div className="buttons">
          <button className="delete" onClick={() => handleDelete(plan.id)}>Delete</button>
          <button className="like" onClick={() => handleLike(plan)}>♡</button>
        </div>
      </div>
    </li>
  )
}

export default TravelPlanCard