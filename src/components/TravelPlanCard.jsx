import React from 'react'

export default function TravelPlanCard(props) {
    const { plan, deletePlan}
  return (
    <div>
      <div key={plan.id} className="plan-div">
                <img className="plan-img" src={plan.image} />
                <h3>{plan.destination} ({plan.days} Days)</h3>
                {plan.description}
                {plan.totalCost <= 350 ? <p>Great deal</p> : <p>Premium</p>}
                Price: {plan.totalCost}€
                {plan.allInclusive && <p>All Inclusive</p>}
                <button className="button" onClick={() => deletePlan(plan.id)}>Delete</button>
            </div>
    </div>
  )
}
