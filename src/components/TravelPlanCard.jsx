import { useState } from "react";

function TravelPlanCard({ plan, onDelete, onFavorite }) {
    const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
    const [colorIndex, setColorIndex] = useState(0);

    const handleFavoriteClick = () => {
        onFavorite(plan);

        const nextIndex = (colorIndex + 1) % colors.length;
        setColorIndex(nextIndex);
    };

    return (
        <div>
            <h2>{plan.destination}</h2>
            <p>{plan.days} days</p>
            <p>Total cost: {plan.totalCost} €</p>
            <p>All inclusive: {plan.allInclusive ? "Yes" : "No"}</p>

            <div>
                {plan.totalCost <= 350 && <span>Great Deal </span>}
                {plan.totalCost >= 1500 && <span>Premium </span>}
                {plan.allInclusive && <span>All Inclusive</span>}
            </div>

            <button onClick={() => onDelete(plan.id)}>Delete</button>

            <button
                onClick={handleFavoriteClick}
                style={{ backgroundColor: colors[colorIndex] }}
            >
                ♡
            </button>
        </div>
    );
}

export default TravelPlanCard;
