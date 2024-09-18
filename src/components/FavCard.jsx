function FavCard({plan}) {
    
    return(
        <div className="planCard flex-row">
            <img src={plan.image} alt="plan image" />
            <div className="flex-column">
                <h2>{plan.destination} ( {plan.days} days)</h2>
                <p><span className="text-bold">Price: </span>{plan.totalCost} €</p>
            </div>
        </div>
    );
}

export default FavCard;