import "../components/TravelList.css"

function TravelPlanCard (props){
    return(
        <div className="card-info">
        <p>
          <strong>{plan.destination} ({plan.days} days)</strong>
        </p>
        <p><em>{plan.description}</em></p>
        <p><strong>Price: </strong>{plan.totalCost}€</p>

        <div className="labels">
          {plan.totalCost <= 350 && (
            <span className="label great-deal">Great Deal</span>
          )}
          {plan.totalCost >= 1500 && (
            <span className="label premium">Premium</span>
          )}
          {plan.allInclusive && (
            <span className="label all-inclusive">All Inclusive</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default TravelPlanCard;