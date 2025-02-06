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
        <span className='description'>{ plan.description }</span>
        <span className='price'><span>Price:</span> { plan.totalCost }€</span>
        <div className="labels">
          { plan.totalCost < 350 &&  <span className='label-one'>Great Deal</span>}
          { plan.totalCost > 1500 && <span className='label-two'>Premium</span> }
          { plan.allInclusive && <span className='label-two'>All-Inclusive</span> }
        </div>
      </div>
    </>
  )
}

export default TravelCard