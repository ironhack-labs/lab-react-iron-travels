export default function TravelPlanCard({ plan, deleteButton }) {

    return (
        <div id="containerTravels">
            <img src={plan.image} alt={plan.destination} />
            <div>
                <h2>{plan.destination} ({plan.days} Days)</h2>
                <p>{plan.description}</p>
                <p>Price: {plan.totalCost} €</p>
                <div>
                    {plan.totalCost <= 350 && <span id="greatDeal">Great Deal!</span>}
                    {plan.totalCost >= 1500 && <span id="premium">Premium</span>}
                    {plan.allInclusive && <span id="allInclusive">All-Inclusive</span>}
                </div>
                <button onClick={() => deleteButton(plan.id)}>Delete</button>
            </div>
        </div>
    )
}