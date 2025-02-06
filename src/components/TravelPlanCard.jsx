export default function TravelPlanCard({ plan, onDelete, onAddToFavorites }) {
    let costLabel = "";
    if (plan.totalCost <= 350) {
        costLabel = " Great Deal ";
    } else if (plan.totalCost >= 1500) {
        costLabel = " Premium ";
    }
    const allInclusiveLabel = plan.allInclusive ? " All-Inclusive " : "";
    return (
        <div className="travel-list" style={{ border: "1px solid black", padding: "20px" }}>
            <img className="imgTravel" src={plan.image} alt="" />
            <div>
                <h2>{plan.destination} {plan.days} Days</h2>
                <p>{plan.description}</p>
                <p>Price: {plan.totalCost} €</p>
                {costLabel && <span className="cost-label">{costLabel}   </span>}
                {allInclusiveLabel && <span className="all-inclusive-label">{allInclusiveLabel}</span>}
                <br />
                <button onClick={() => onDelete(plan.id)}>Delete</button>
                <button onClick={() => onAddToFavorites(plan)}> ♡ </button>
            </div>
        </div>
    );
}
