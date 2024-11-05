import React from 'react';

const TravelPlanCard = ({ plan, onDelete }) => {
    const costLabel = plan.totalCost <= 350 ? 'Great Deal' : plan.totalCost >= 1500 ? 'Premium' : '';
    const allInclusiveLabel = plan.allInclusive ? 'All Inclusive' : '';

    return (
        <li>
            {plan.destination} - ${plan.totalCost}
            {costLabel && <span className="label">{costLabel}</span>}
            {allInclusiveLabel && <span className="label">{allInclusiveLabel}</span>}
            <button onClick={() => onDelete(plan.id)}>Delete</button>
        </li>
    );
};

export default TravelPlanCard;
