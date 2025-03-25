import Tag from "./Tag"

export default function TravelPlanCard({plan, onDelete}){
    return(
        
            
                <div key = {plan.id} className="travel-card">
                    <div className = "travel-card-section">
                        <img className = "travel-image" src = {plan.image}/>
                    </div>
                    <div className = "travel-card-section" id="travel-card-content">
                        <h2>{plan.destination}</h2>
                        <p>{plan.description}</p>
                        <p><strong>Price: </strong>{plan.totalCost} €</p>
                        <Tag totalCost={plan.totalCost} allInclusive={plan.allInclusive}/>
                        <button onClick={() => onDelete(plan.id)}>Delete</button>
                    </div>
                </div>
            )
}