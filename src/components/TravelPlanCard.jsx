function TravelPlanCard({ plan, deletePlan }) {
    if(!plan) return null;
    
    const isGreatDeal = plan.totalCost <= 350;
    const isPremium = plan.totalCost >= 1500;
    const isAllInclusive = plan.allInclusive;

    return (
        <div className="travel-card">
            
            <div className="card-image-container">
                <img src={plan.image} alt={plan.destination} />
                
                <div className="badges-container">
                    {isGreatDeal && (<span className="badge great-deal">Great Deal</span>)}
                    {isPremium && (<span className="badge premium">Premium</span>)}
                    {isAllInclusive && (<span className="badge all-inclusive">All Inclusive</span>)}
                </div>
            </div>
            
            <div className="card-details">
                <h3>{plan.destination} ({plan.days} Days)</h3>
                <p>{plan.description}</p>
                <p>Price: <b>{plan.totalCost} €</b></p>
                
                <div className="card-actions">
                    <button onClick={() => deletePlan(plan.id)}>
                       Delete
                    </button>
                </div>
            </div>
            
        </div>
    );
}

export default TravelPlanCard;