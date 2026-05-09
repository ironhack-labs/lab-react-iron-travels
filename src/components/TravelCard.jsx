import { useState } from "react";

const COLORS = ["purple", "blue", "green", "yellow", "orange", "red"];

function TravelPlanCard({ plan, onDelete, onFavorite }) {
  const { id, destination, image, days, totalCost, allInclusive, description } = plan;
  const [colorIndex, setColorIndex] = useState(0);

  const getCostLabel = () => {
    if (totalCost <= 350) return <span className="label great-deal">Great Deal</span>;
    if (totalCost >= 1500) return <span className="label premium">Premium</span>;
    return null;
  };

  const handleFavoriteClick = () => {
    onFavorite(plan);
    setColorIndex((prev) => (prev + 1) % COLORS.length);
  };

  return (
    <div className="travel-card">
      <img src={image} alt={destination} />
      <h3>{destination}</h3>
      <p>{description}</p>
      <p>Duration: {days} days</p>
      <p>Total Cost: ${totalCost}</p>

      <div className="labels">
        {getCostLabel()}
        {allInclusive && <span className="label all-inclusive">All Inclusive</span>}
      </div>

      <button onClick={() => onDelete(id)}>Delete</button>
      <button
        onClick={handleFavoriteClick}
        style={{ backgroundColor: COLORS[colorIndex] }}
      >
        ♡
      </button>
    </div>
  );
}

export default TravelPlanCard;