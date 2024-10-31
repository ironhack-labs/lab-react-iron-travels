import React from 'react';

export default function TravelPlanCard ({ plan, onDelete }) {
    return (
        <div>
            <img src={plan.image} alt={plan.destination} />
            <div>
                <h2>{plan.destination} ({plan.days} Days)</h2>
                <p>{plan.description}</p>
                <p>Price: {plan.totalCost} €</p>

                {plan.totalCost <= 350 && <span className="label">Great Deal</span>}
                {plan.totalCost >= 1500 && <span className="label">Premium</span>}
                {plan.allInclusive && <span className="label">All Inclusive</span>}

                <button onClick={() => onDelete(plan.id)}>Delete</button>
            </div>
        </div>
    );
};
