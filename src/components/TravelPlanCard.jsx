function TravelPlanCard({ plan, deleteData }) {

    return (
        <div key={plan.id} className="travel-card">
            <img src={plan.image} alt={plan.destination} />

            <div className="travel-info">
                <h3>{plan.destination} ({plan.days} Days)</h3>
                <p>{plan.description}</p>
                <p><strong>Price:</strong> {plan.totalCost} €</p>

                <p className="label">
                    <p>{plan.totalCost <= 350 ? 'Great Deal' : null}  </p>
                    <p>{plan.totalCost >= 1500 ? 'Premium' : null}  </p>
                </p>

                <p>
                    <button onClick={() => { deleteData(plan.id) }} >Delete</button>
                </p>

            </div>
        </div>
    )
}

export default TravelPlanCard;
