import { useState } from "react";

const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

function TravelPlanCard({ plan, onDelete, onFavorite }) {
  const [colorIndex, setColorIndex] = useState(-1);

  function handleFavorite() {
    onFavorite(plan);
    // go to the next color, and back to the first one at the end
    setColorIndex((colorIndex + 1) % colors.length);
  }

  return (
    <div className="travel-card">
      <img src={plan.image} alt={plan.destination} className="travel-img" />

      <div className="travel-info">
        <h2>
          {plan.destination} ({plan.days} Days)
        </h2>
        <p>
          <i>{plan.description}</i>
        </p>
        <p>
          <b>Price:</b> {plan.totalCost} €
        </p>

        <div className="labels">
          {plan.totalCost <= 350 && <span className="label green">Great Deal</span>}
          {plan.totalCost >= 1500 && <span className="label blue">Premium</span>}
          {plan.allInclusive && <span className="label blue">All-Inclusive</span>}
        </div>

        <div className="card-buttons">
          <button className="btn-delete" onClick={() => onDelete(plan.id)}>
            Delete
          </button>
          <button
            className="btn-fav"
            onClick={handleFavorite}
            style={{ backgroundColor: colorIndex === -1 ? "#b0b0b0" : colors[colorIndex] }}
          >
            ♡
          </button>
        </div>
      </div>
    </div>
  );
}

export default TravelPlanCard;
