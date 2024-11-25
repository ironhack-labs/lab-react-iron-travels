function TravelPlanCard({ plan, handleDelete, handleFav }) {
    return (
        <>
            {plan.map((p) => (
                <div className="container mb-3 d-flex flex-row flex-row border border-black" key={p.id}>
                    <div>
                        <img className="p-3" width="350px" src={p.image} alt={p.destination} />
                    </div>
                    <div className="d-flex flex-column align-items-start pt-3">
                        <h3>{p.destination} ({p.days} Days)</h3>
                        <p>{p.description}</p>
                        <p><strong>Price:</strong> {p.totalCost} €</p>
                        <div className="d-flex flex-row gap-2 justify-content-start">
                            {p.totalCost <= 350 && <label className="bg-success rounded px-2"><strong>Great Deal</strong></label>}
                            {p.totalCost >= 1500 && <label className="bg-primary text-light rounded px-2"><strong>Premium</strong></label>}
                            {p.allInclusive && <label className="bg-primary text-light rounded px-2"><strong>All-Inclusive</strong></label>}
                        </div>
                        <div className="d-flex mt-auto mb-3 col-12 justify-content-between">
                            <button id={p.id} onClick={() => handleDelete(event)} className="btn btn-secondary" type="button">Delete</button>
                            <button id={p.id} onClick={() => handleFav(event)} className="btn btn-secondary" type="button">♡</button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default TravelPlanCard;
