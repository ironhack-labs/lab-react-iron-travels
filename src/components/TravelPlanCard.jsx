function TravelPlanCard ({ plan, handleDelete}) {
    return (


<div className="travelContainer" key={plan.id}>
                <img className="image" src={plan.image}></img>
                <div> 
                <h3>{plan.destination} ({plan.days} Days)</h3>
                    <p><i>{plan.description}</i></p>
                    <p>Price: {plan.totalCost} $</p>
                <div className="TagContainer"> 
                {plan.totalCost <= 350 && <p className="Great">Great deal</p>}
                {plan.totalCost >= 1500 && <p className="Premium">Premium</p>}  
                {plan.allInclusive && <p className="Premium">All-Inclusive</p>}
                </div>
                <button className="DeleteBtn" onClick={() => handleDelete(plan.id)}>Delete</button>
                </div>      
                </div>



    )
}

export default TravelPlanCard