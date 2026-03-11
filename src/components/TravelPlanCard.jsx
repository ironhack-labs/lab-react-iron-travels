import { useState } from "react"

function TravelPlanCard({ plan, onDelete, onFavorite, isFavorite }) {

    const colors = ["purple", "blue", "green", "yellow", "orange", "red"]

    const [colorIndex, setColorIndex] = useState(0)

    const handleFavorite = () => {
    if (onFavorite) {
        onFavorite(plan)
    }
    setColorIndex((prev) => (prev + 1) % colors.length)
}

    return (
        <div className={!isFavorite ? "card" : "card-favorite"}>
            <img
                className={!isFavorite ? "card-image" : "card-image-favorite"}
                src={plan.image}
            />
            <div className={!isFavorite ? "card-details" : "card-details-favorite"}>
                <h3>
                    {plan.destination} ({plan.days} Days)
                </h3>

                {!isFavorite && <p>{plan.description}</p>}
                <p>{!isFavorite ? "Price: " : ""} {plan.totalCost} €</p>
                {!isFavorite &&
                    <div className="labels">
                        {plan.totalCost <= 350 && (
                            <span className="great-deal">Great Deal</span>
                        )}

                        {plan.totalCost >= 1500 && (
                            <span className="premium">Premium</span>
                        )}

                        {plan.allInclusive && (
                            <span className="all-inclusive">All Inclusive</span>
                        )}
                    </div>}
                <div className="card-buttons">
                    {onDelete && (
                        <button onClick={() => onDelete(plan.id)}>Delete</button>
                    )}
                    {onFavorite && (
                        <button
                            style={{ backgroundColor: colors[colorIndex] }}
                            onClick={handleFavorite}
                        >♡</button>
                    )}
                </div>
            </div>
            { }
        </div>

    );
}

export default TravelPlanCard