import travelPlansData from '../assets/travel-plans.json'
import './TravelList.css'
import { useState } from 'react'

function TravelList() {
    // const [isPremium, setPremium] = useState(false)
    // const isInclusive = true
    return (
        <ul>
            {travelPlansData.map(({ id, destination, image, days, allInclusive, totalCost, description, parts }) => {
                return (
                    <li className="card" key={id}>
                        <img src={image} alt={destination} />
                        <div id="info">
                            <h2>{destination} ({days} days)</h2>
                            <p>{description}</p>
                            <h3>Price: {totalCost} €</h3>

                            {/* { (travelPlansData.allInclusive === true)&& <h4>All Inclusive</h4> } */}

                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default TravelList