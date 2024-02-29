const TravelPlanCard = ({plan, onDelete, onAddFavorites}) => {

  return (
    <div key={plan.id} className="card-container">

            <div className="img-wrapper">
                <img src={plan.image} alt="img" />
            </div>

            <div className="card-data-wrapper">
                
                <h1>{plan.destination} ({plan.days} Days)</h1>  
                <div className="info-wrapper">
                     <p>{plan.description}</p>
                     <p><strong>Price: €</strong> {plan.totalCost}</p>
                </div>

                <div className="deal-type-wrapper">

                    {plan.totalCost <= 350 && <span className="great-deal">Great Deal</span>}
                    {plan.totalCost >= 1500 && <span className="premium-deal">Premium</span>}
                    {plan.allInclusive && <span className="all-inclusive">All Inclusive</span>}

                </div>

                <div className="button-wrapper">

                <button onClick={() => onDelete(plan.id)}>Delete</button>
                <button onClick={() => onAddFavorites(plan.id)}>♡</button>
                </div>
            </div>

    </div>
  )
}

export default TravelPlanCard