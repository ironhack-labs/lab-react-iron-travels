import React, { useState } from "react";

const TravelPlanCard = ({ plan, onDelete, onFavorite, isFavorite }) => {
  const [favColorIndex, setFavColorIndex] = useState(0);
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const handleFavoriteClick = () => {
    setFavColorIndex((prev) => (prev + 1) % colors.length);
    onFavorite(plan);
  };

  return (
    <li className="travel-card">
      <h3>{plan.destination}</h3>
      <p>{plan.description}</p>
      <p><strong>Date:</strong> {plan.date}</p>
      <p><strong>Budget:</strong> ${plan.budget}</p>

      {/* Cost Labels */}
      {plan.totalCost <= 350 && <span className="label great-deal">Great Deal</span>}
      {plan.totalCost >= 1500 && <span className="label premium">Premium</span>}
      {plan.allInclusive && <span className="label all-inclusive">All Inclusive</span>}

      <button onClick={() => onDelete(plan.id)}>Delete</button>
      <button
        onClick={handleFavoriteClick}
        style={{ backgroundColor: isFavorite ? colors[favColorIndex] : "gray" }}
      >
        {isFavorite ? "❤️" : "♡"}
      </button>
    </li>
  );
};

export default TravelPlanCard;
