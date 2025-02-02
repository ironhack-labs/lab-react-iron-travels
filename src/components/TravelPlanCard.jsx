import { useState } from "react";


const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

function TravelPlanCard({ plan, deletePlan, toggleFavorite, isFavorite }) {
  const [colorIndex, setColorIndex] = useState(0);

  if (!plan) return null; // Garante que plan existe antes de acessar seus valores

  function handleFavoriteClick() {
    toggleFavorite(plan);
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  }

  return (
    <li className="destinationCard">
      <img src={plan.image} alt="Picture of the destination" />
      <div>
        <h3 id="destinationTitle">
          {plan.destination} ({plan.days} days)
        </h3>
        <p id="destinationDescription">{plan.description}</p>
        <p>
          <strong>Price: </strong>
          {plan.totalCost} €
        </p>
        <div id="labelDiv">
          {plan.totalCost <= 350 && (
            <label id="greatDealLabel">
              <strong>Great Deal</strong>
            </label>
          )}
          {plan.totalCost >= 1500 && <label className="bluelabel">Premium</label>}
          {plan.allInclusive && <label className="bluelabel">All Inclusive</label>}
        </div>
        <button id="deleteBTN" onClick={() => deletePlan(plan.id)}>
          Delete
        </button>
        <button
          style={{ backgroundColor: colors[colorIndex] }}
          onClick={handleFavoriteClick}
        >
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>
    </li>
  );
}

export default TravelPlanCard;
