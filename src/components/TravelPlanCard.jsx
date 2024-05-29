import React from 'react'

const TravelPlanCard = ({plan, onDelete }) => {
  return (
                <div key = {plan.id} className="card-border">
                <div className="card-img"> 
                <img src={plan.image} alt="photo of country" />

                </div>
                
                <div className="text"> 
                <h2>{plan.destination} ({plan.days} days)</h2>
                <p><i>{plan.description}</i></p> 
                <p>Price:{plan.totalCost}€</p>
                <div className="labels">
                {plan.totalCost <= 350 ? <div className="great-deal">Great Deal</div> : plan.totalCost >= 1500 ? <div className="premium-deal">Premium</div> : <span></span>}
                {plan.allInclusive ? <div className="inclusive-deal">All-Inclusive</div> :  <span></span>}
                </div>

                </div>
                <div className='container-btn'>
                <button onClick={() => onDelete(plan.id)} className="delete-btn">Delete</button>
                <button className="delete-btn">💖</button>
                </div>
            </div>




  )
}

export default TravelPlanCard