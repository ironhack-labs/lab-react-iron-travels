import "../assets/travelplancard.css"


const TravelPlanCard = ({plan , doDelete, addFavoritePlan}) => {
    return (
      <div className="travel-plan-card">
        <img src={plan.image} alt={plan.destination} className="card-image" />
        <div className="card-content">
            <h3>{plan.destination}</h3>
            <p> {plan.description}</p>
            <p className="price">Price: {plan.totalCost}</p>
            <div className="labels">
                {plan.totalCost <= 350 && ( <span className="label great-deal">Great Deal</span>)}
                {plan.totalCost >= 1500 && ( <span className="label premium">Premium</span> )}
                {plan.allInclusive && ( <span className="label all-inclusive">All Inclusive</span> )}
            </div>

            <button onClick={ () => { doDelete(plan.id); }} className="delete-button"> Delete </button>
            <button onClick ={()=> {addFavoritePlan(plan)}} class="favorite-button">♡</button>
        </div>
      </div>
    );
  };
   
  export default TravelPlanCard;