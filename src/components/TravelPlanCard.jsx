function TravelPlanCard({ plan, handleDelete }) {
    return (
        <div key={plan.id}>
            <button
                onClick={() => handleDelete(plan.id)}
            >
                Delete
            </button>

            <h2>{plan.destination}</h2>
            <p>{plan.description}</p>
            <p>{plan.totalCost} €</p>
            {plan.totalCost <= 350 && (<p>Great Deal €</p>)}
            {plan.totalCost >= 1500 && (<p>Premium</p>)}
            {plan.allInclusive && (<p>All Inclusive</p>)}
        </div>
    );
}

export default TravelPlanCard;