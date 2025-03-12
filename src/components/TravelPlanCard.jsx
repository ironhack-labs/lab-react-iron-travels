import React from 'react'

export const TravelPlanCard = (props) => {
    const {plan, deleteOne, favorite} = props
    // console.log(plan)
  return (
    <div key={plan.id} className="travel-container">
    <div className="img-container">
        <img src={plan.image} alt="" />
    </div>
    <div>
        <h2>{plan.destination} ( {plan.days} days )</h2>
        <p className="description">{plan.description}</p>
        <p><span>Price : </span>{plan.totalCost}</p>
        {/* if(plan.totalCost <= 350){
        <div>Great Deal</div>
        } */}
        <div className="label-container">
            {plan.totalCost <= 350 && <div className="label great-label">Great Deal</div>}
            {plan.totalCost >= 1500 && <div className="label prenium-label">Prenium</div>}
            {plan.allInclusive && <div className="label all-inclusive-label">All Inclusive</div>}
        </div>
        <button onClick={() => deleteOne(plan.id)}>Delete</button>
        <button onClick={() => favorite(plan.id)}>♡</button>
    </div>
</div> 
  )
}
