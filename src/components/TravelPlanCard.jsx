import './TravelPlanCard.css'

const travelPlanCard = ({ plan, onClickDelete }) => {
  return (
    <div key={plan.id} className='plan-block'>

      <img src={plan.image} className="plan-img" alt={plan.description} />

      <div>
        <h4>{plan.destination} ({plan.days}days)</h4>
        <p className='description'>{plan.description}</p>
        <p>Price: {plan.totalCost}€</p>
        <div>

        </div>
        {plan.totalCost <= 350 && (
          <div className='label bgcolor-green'>
            <label>Great Deal</label>
          </div>
        )}
        {plan.totalCost >= 1500 && (
          <div className='label '>
            <label>Premium</label>
          </div>
        )}
        {plan.allInclusive && (
          <div className='label'>
            <label>All Inclusive</label>
          </div>
        )}
        <button onClick={() => onClickDelete(plan.id)} className='btn'>Delete</button>
      </div>
    </div>
  )
}

export default travelPlanCard