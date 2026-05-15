function TravelPlanCard ( { plan }) {
    return (
        <div>
            <div>
                <img className="images" src={plan.image} alt={plan.destination}/>
                </div>
                <div>
                <h2>{plan.destination} ({plan.days} days)</h2>
                    <p>{plan.description}</p>
                    <p>Price: {plan.totalCost}</p>

                    {plan.totalCost <= 350 && <span className="granOferta">Gran Oferta</span>} <br/>

                    {plan.totalCost >= 1500 && <span className="premium">Premium</span>} <br/>

                    {plan.allInclusive && <span className="allInclusive">Todo Incluido</span>}                   
            </div>

        </div>


    )
}

export default TravelPlanCard