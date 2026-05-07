import travelPlansData from "../assests/travel-plans.json";
import {useState} from 'react'


export default function TravelList(){
    return(
        <div>
            {travelPlansData.map((plan) => {
                return (
                    <div key={plan.id}>
                        <img src={plan.image} alt={plan.destination} />
                        <h2>{plan.destination} ({plan.days} Days)</h2>
                        <p>{plan.description}</p>
                        <p>Price: {plan.totalCost}$</p>
                    </div>
                )
            })}
        </div>
    )




}