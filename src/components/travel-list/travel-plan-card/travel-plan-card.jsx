function TravelPlanCard ({ plan, handleDeleteButton }) {
    return (
            <li className="mb-4" key={plan.id}>
            <img className="img-fluid"
                    src={plan.image} 
                    alt={`Image of ${plan.destination}`} 
                />                
                <h5>{plan.destination} ({plan.days} days)</h5>
                <p className="fst-italic">{plan.description}</p>
                <p><span className="fw-bold">Price: </span>{plan.totalCost} €</p>

                <div>
                
                    {plan.totalCost <= 350 && (<span className="badge bg-success me-2">Great Deal</span>)}
                    {plan.totalCost >= 1500 && (<span className="badge bg-warning me-2">Premium</span>)}
                    {plan.allInclusive && (<span className="badge bg-primary">All Inclusive</span>)}

                </div>
                <button className="btn btn-secondary" onClick={() => handleDeleteButton(plan.id)}>Delete</button>

            </li>                
        
    )
}
export default TravelPlanCard;