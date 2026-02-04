function TravelPlanCard({plan, deleteTravelPlan}) {
    return (
        <div>
           
            <img src={plan.image} alt={plan.destination} width="200" />
            <h3>{plan.destination}</h3>
            <p>{plan.days} Days</p>
            <p>{plan.totalCost} €</p>

          
            {plan.totalCost <= 350 && <p>Great Deal</p>}
            {plan.totalCost >= 1500 && <p>Premium</p>}
            {plan.allInclusive && <p>All Inclusive</p>}


            
            <button onClick={() => deleteTravelPlan(plan.id)}>
                Delete
            </button>
        </div>
    );
}

export default TravelPlanCard;