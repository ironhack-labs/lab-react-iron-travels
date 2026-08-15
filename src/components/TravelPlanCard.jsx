function TravelPlanCard(props) {
    return(
        <div>
            <h2>{props.plan.destination}</h2>

            <p>{props.plan.description}</p>

           <p>{props.plan.totalCost} €</p>

            {props.plan.totalCost <= 350 && <span>Great Deal</span>}

            {props.plan.totalCost >= 1500 && <span>Premium</span>}

            {props.plan.allInclusive && <span>All Inclusive</span>}
        </div>
    );
}

export default TravelPlanCard;
