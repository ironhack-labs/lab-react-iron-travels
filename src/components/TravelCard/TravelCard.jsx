import React from 'react'
import './TravelCard.css'

function TravelCard(travelProp) {
  const { plan } = travelProp;
  //console.info('value:', plan)

  return (
    <>
      <div className="img-travel">
        <img src={ plan.image } alt={`image-${ plan.id }`} />
      </div>
      <div className="info-travel">
        <h4>{ plan.destination } ({ plan.days } Days)</h4>
        <span>{ plan.description }</span>
        <span>Price: { plan.totalCost }</span>
        <span>{ plan.totalCost < 350 && "Great Deal" }</span>
        <span>{ plan.totalCost > 1500 && "Premium" }</span>
        <span>{ plan.allInclusive && "All-Inclusive" }</span>
      </div>
    </>
  )
}

export default TravelCard