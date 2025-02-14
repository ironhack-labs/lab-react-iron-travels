import React from 'react';

// Iteration 4
function TravelPlanCard({ plan, onDelete }) {
    return (
        <li key={plan.id}>
        <h3>{plan.destination}</h3>
        <img src={plan.image} alt={plan.destination} className="travel-image" />
        <p>{plan.description}</p>
        <p><strong>Days:</strong> {plan.days}</p>
        <p><strong>Total cost:</strong> {plan.totalCost}€</p>

        {plan.parts && (
            <div>
                <h4>Included in the package:</h4>
                <ul>
                    {plan.parts.map((part, index) => (
                        <li key={index}>
                            <strong>{part.name}:</strong> {part.description} (Coste: {part.cost}€)
                        </li>
                    ))}
                </ul>
            </div>
        )}F

        {/*Iteration 2 - labels based on the cost of each travel plan*/}
        {plan.totalCost <= 350 && <span className="label great-deal">Great Deal</span>}
        {plan.totalCost >= 1500 && <span className="label premium">Premium</span>}
        {plan.allInclusive && <span className="label all-inclusive">All Inclusive</span>}

        {/*Iteration 3 - button + delete function*/}
        <button onClick={() => onDelete(plan.id)} className="delete-btn">Delete</button>
    </li>
    );
}

export default TravelPlanCard;
