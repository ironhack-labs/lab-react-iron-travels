import React from 'react'

const TravelList = ({ image, destination, days, description, totalCost }) => {
  return (
    <div 
        style={{
            border: '1px solid black',
            paddingTop: '20px',
            paddingBottom: '20px',
            paddingLeft: '30px',
            paddingRight: '30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
        }}
    >
        <div>
            <img src={image} style={{ width: '20em' }} alt="travel pict" />
        </div>
        <div>
            <h3>{ destination } ( { days } days )</h3>
            <p>{description}</p>
            <p>Price: { totalCost } </p>
        </div>
    </div>
  )
}

export default TravelList