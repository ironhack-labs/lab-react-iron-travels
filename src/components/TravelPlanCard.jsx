import React from 'react'
import './travel.css'

const TravelPlanCard = ({
  plan,
  deleteItem,
  toggleFavorite,
  changeColor,
  buttonColor
}) => {
  const totalCost = plan.parts.reduce((sum, part) => sum + part.cost, 0)
  let costLabel = ''
  if (totalCost <= 350) {
    costLabel = 'Great Deal'
  } else if (totalCost >= 1500) {
    costLabel = 'Premium'
  }

  return (
    <div key={plan.id} className='card'>
      <div className='img-frame'>
        <img src={plan.image} alt='' />
      </div>
      <div className='description-frame'>
        <h3>{plan.destination}</h3>
        <h5>{plan.description}</h5>
        <p>
          {plan.parts.map((part, index) => (
            <span key={index}>
              <h5>Price:</h5>
              <span>{part.cost}</span>
            </span>
          ))}
        </p>
        <div className='labels'>
          {costLabel && <span className='label'>{costLabel}</span>}
          {plan.allInclusive && <span className='label'>All Inclusive</span>}
        </div>
      </div>
      <div className='buttons'>
        <button onClick={() => deleteItem(plan.id)}>Delete</button>
        <button
          onClick={() => {
            toggleFavorite(plan)
            changeColor(plan.id)
          }}
          style={{ backgroundColor: buttonColor }}
        >
          ♡ Favorite
        </button>
      </div>
    </div>
  )
}

export default TravelPlanCard
