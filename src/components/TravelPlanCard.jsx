import React from 'react';
export default function TravelPlanCard({plan, deleteTravel, favoriteTravel}) {
    return (
        <ul>
        <li key={plan.id}>
            <h3>{plan.destination}</h3>
            <img src={plan.image} />
            <p>{plan.description}</p>
            <p>{plan.days}</p>
            <p>{plan.totalCost}$</p>
            {plan.totalCost <= 350 && <span className="label great-deal">Great Deal</span>}
            {plan.totalCost >= 1500 && <span className="label premium">Premium</span>}
            {plan.allInclusive && <span className="label all-inclusive">All Inclusive</span>}
            <button onClick={() => deleteTravel(plan.id)}>Delete</button>
            <button onClick={() => favoriteTravel(plan.id)}>
                {plan.isFavorite ? '❤️' : '♡'}
            </button>
        </li>
        </ul>
    )

}