
function TravelPlanCard({plan, removePlan}) {
  
  const isGreatPlan = plan.totalCost < 350;
  const isPremium = plan.totalCost > 1500;
  const allInclusiveTravel = plan.allInclusive;

  return (
    <div className='list'>
      <div className='list-item'>
        <div className="contenu-one">
            <img src={plan.img} alt='image'/>
        </div>
        <div className="contenu-two">
            <h2>{plan.destination}</h2>
            <p>{plan.description}</p>
            <div>Price: {plan.totalCost} €</div>
            {allInclusiveTravel && <div className="all-inclusiv tag">Premium</div>}
            {isPremium && <div className="premium tag">Premium</div>}
            {isGreatPlan && <div className="great-deal tag">Great Deal</div>}
            <button className="delete" onClick={() => removePlan(plan.id)}>Delete</button>
        </div>
      </div>    
    </div>
    );
}

export default TravelPlanCard;


