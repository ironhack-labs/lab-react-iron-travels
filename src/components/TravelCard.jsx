import "./TravelCard.css"
import { useState, useEffect } from 'react'


const TravelCard = ({ id, destination, image, days, totalCost, description, deleteTravelPlans }) => {

    let labelStatus = 'regular'
    let labelContent = 'Regular'

    if (totalCost <= 350) {
        labelStatus = 'greatDeal'
        labelContent = '¡Great Deal!'
        
    } else if (totalCost >= 1500) {
        labelStatus= 'premium'
        labelContent = 'Premium'

    }

    return (
        <div className='TravelCard'>

            <img src={image} alt="" />

            <div className="details">
                <h1> {destination} ({days} Days) </h1>
                <p>{description} </p>
                <div>
                    <h5>Price: </h5>
                    <p> {totalCost}€ </p>
                </div>

                <div className="labels">
                    <label className={labelStatus} htmlFor=""> {labelContent}</label>
                </div>

                <button onClick={() => deleteTravelPlans(id)}>Delete</button>
            </div>

        </div>
    )
}

export default TravelCard