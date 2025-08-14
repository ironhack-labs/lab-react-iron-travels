function TravelPlanCard ({plan, onDelete}) {
                /*Labels*/
                let dealLabel = "";
                if (plan.totalCost <= 350) {
                    dealLabel = "Good Deal";
                } else if (plan.totalCost >= 1500) {
                    dealLabel = "Premium";
                }
                return (
                <div className="travel-card" key={plan.id}>
                    <img src={plan.image} alt={plan.destination}></img>
                    <div className="travel-info">
                        <h2>{plan.destination} ({plan.days} Days)</h2>
                        <p className="plan-description"><i>{plan.description}</i></p>
                        <p className="plan-price"><strong>Price:</strong> {plan.totalCost} €</p>
                        <div className="labels">
                            {dealLabel && <span className="deal-label">{dealLabel}</span>}
                            {plan.allInclusive && <span className="all-inclusive-label">All-Inclusive</span>}
                        </div>
                        <div className="delete-button">
                            <button onClick={() => onDelete(plan.id)}>
                                Delete
                            </button> 
                        </div>
                    </div>
                </div>
                );
            } 

export default TravelPlanCard