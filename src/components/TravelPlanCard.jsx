import { useState } from "react";

const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

function TravelPlanCard({ plan, onDelete, onFavorite }) {
  const [colorIndex, setColorIndex] = useState(0);

  const handleFavoriteClick = () => {
    onFavorite(plan);
    setColorIndex((prev) => (prev + 1) % colors.length);
  };

  return (
    <div className="travel-plan-card">
      <img src={plan.image} alt={plan.destination} width="150" />

      <div>
        <h3>{plan.destination} ({plan.days})</h3>
        <p>{plan.description}</p>
        <p><strong>Price:</strong> {plan.totalCost} Euro</p>

        {/* LABELS */}
        <div className="labels">
          {plan.totalCost <= 350 && (
            <span className="label deal">Great Deal</span>
          )}

          {plan.totalCost >= 1500 && (
            <span className="label premium">Premium</span>
          )}

          {plan.allInclusive && (
            <span className="label inclusive">All Inclusive</span>
          )}
        </div>

        {/* FAVORITE BUTTON */}
        <button
          onClick={handleFavoriteClick}
          style={{ backgroundColor: colors[colorIndex], marginRight: "10px" }}
        >
          ♡
        </button>

        {/* DELETE BUTTON */}
        <button onClick={() => onDelete(plan.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TravelPlanCard;
