function TravelPlanCard({ plan, handleDeleteTrip, handleFavoriteTrip }) {
    return (
        <div className="trip-card">
            <div className="card-image">
                <img src={plan.image} />
            </div>
            <div className="card-content">
                <p className=" title bold">{plan.destination} ({plan.days} Days)</p>
                <p>{plan.description}</p>
                <p>
                    <span className="bold">Price: </span>
                    {plan.totalCost} €
                </p>

               <div className="pill-container">
                    {plan.totalCost <= 350 && (
                        <span className="card-pill green-pill">Great Deal</span>
                    )}
                    {plan.totalCost >= 1500 && (
                        <span className="card-pill blue-pill">Premium</span>
                    )}
                    {plan.allInclusive && (
                        <span className="card-pill blue-pill">All Inclusive</span>
                    )}
                </div>
                
                <div className="btn-component">
                    <button 
                        onClick={()=> {handleDeleteTrip(plan.id)}} 
                        className="btn-delete">
                            Delete
                    </button>

                    <button 
                        onClick={()=> {handleFavoriteTrip(plan.id)}}
                        className="btn-fav"
                    >
                        ♡
                    </button>
                </div>
               
            </div>
        </div>
    )
}

export default TravelPlanCard