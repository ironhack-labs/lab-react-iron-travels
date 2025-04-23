import { useState } from "react";

const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

function TravelPlanCard({ plan, onFavorite, onDelete }) {
  const [colorIndex, setColorIndex] = useState(0);

  const handleFavoriteClick = () => {
    onFavorite(plan);
    setColorIndex((prev) => (prev + 1) % colors.length);
  };

  return (
    <article className="locationCard">
      <img src={plan.image} alt={plan.destination} />
      <div>
        <p>{plan.destination} ({plan.days} Days)</p>
        <p><i>{plan.description}</i></p>
        <p><b>Price:</b> {plan.totalCost} €</p>

        <div className="tags">
          {plan.totalCost <= 350 && <p className="greatDeal">Great Deal</p>}
          {plan.totalCost >= 1500 && <p className="premium">Premium</p>}
          {plan.allInclusive && <p className="allinclusive">All Inclusive</p>}
        </div>

        {onDelete && (
          <button className="delete-btn" onClick={() => onDelete(plan.id)}>
            Delete
          </button>
        )}

        <button
          className="favorite-btn"
          style={{ backgroundColor: colors[colorIndex] }}
          onClick={handleFavoriteClick}
        >
          ♡
        </button>
      </div>
    </article>
  );
}

export default TravelPlanCard;