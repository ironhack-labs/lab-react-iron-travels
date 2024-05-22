import React from 'react'

function TravelPlanCard( {plan} ) {
  return (
    <div key={plan.id} className="travel-plan-card">
        <img className="travel-img" src={plan.image} alt="" srcset="" />
        <div className="travel-text">
            <h2>{plan.destination} ({plan.days} days)</h2>
            <p><b>Price:</b> {plan.totalCost} €</p>
        </div>
    </div>
  )
}

export default TravelPlanCard