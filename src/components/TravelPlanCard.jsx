import { useState } from "react";

function TravelPlanCard({ plan, handleDelete, handleFavorite }) {
  const [color, setColor] = useState("red");
  const colors = ["red", "blue", "green", "yellow", "purple"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const handleClick = () => {
    handleFavorite(plan.id);
    setColor(randomColor);
  };

  const defineLabel = (cost) => {
    if (cost <= 350) {
      return "Great Deal";
    } else if (cost >= 1500) {
      return "Premium";
    }
  };

  const label = defineLabel(plan.totalCost);

  return (
    <>
      <li key={plan.id}>
        <h2>{plan.destination}</h2>
        <p>{plan.description}</p>
        <p>
          {plan.totalCost} - {label}
        </p>
        {plan.allInclusive && <strong>All Inclusive</strong>}
        <button onClick={() => handleDelete(plan.id)}>Delete</button>
        <button onClick={handleClick} style={{ backgroundColor: color }}>
          ♡
        </button>
      </li>
    </>
  );
}

export default TravelPlanCard;
