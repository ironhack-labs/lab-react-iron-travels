
function TravelPlanCard({ plan }) {
    return (
        <>
        {plan.map((item) => {
            return (
            <div key={item.id} className="border border-dark border-2 rounded mb-4 fs-5 fw-semibold" style={{height: '300px', color: '#0a035a'}}>
                <img style={{ height: '150px', width: '100%', objectFit: 'cover', objectPosition: 'top'}} src={item.image} />
                <div className="d-flex flex-column mt-4 gap-3">
                    <div>{item.destination} {item.days} Days</div>
                    <div>{item.totalCost} €</div>
                </div>
            </div>
            );
        })}
        </>
    );
}

export default TravelPlanCard;