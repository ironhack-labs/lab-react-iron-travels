import React from 'react';

function TravelPlanCard({ plan, removeCallback, toggleFavorite }) {
    return (
        <div className='travel-card'>
            <img src={plan.image} alt={plan.title} className="travel-image" />
            <div>
                <p><strong>{plan.destination} ({plan.days} Days)</strong></p>
                <h3>{plan.title}</h3>
                <p><em>{plan.description}</em></p>
                <p><strong>Price: </strong>{plan.totalCost}</p>

                <div className="labels">
                    {plan.totalCost < 350 && <span className="label blue">Great Deal</span>}
                    {plan.totalCost > 1500 && <span className="label blue">Premium</span>}
                    {plan.allInclusive && <span className="label blue">All Inclusive</span>}
                </div>

                <div className="actions">
                    <button onClick={() => removeCallback(plan.id)} className="delete-button">Delete</button>
                    <button 
                        onClick={() => toggleFavorite(plan.id)} 
                        className="favorite-button"
                        style={{ backgroundColor: plan.isFavorite ? 'red' : 'transparent' }} 
                    >
                        {plan.isFavorite ? '♥' : '♡'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TravelPlanCard;
