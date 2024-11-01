import React from "react";
import TravelListCss from "./TravelList.css";

function TravelPlanCard({
  plan,
  handleClick,
  handleClickFavorite,
  favoriteColor,
}) {
  let costLabel;
  let labelClassName = "";
  if (plan.totalCost <= 350) {
    costLabel = "Great Deal";
    labelClassName = "label-great-deal";
  } else if (plan.totalCost >= 1500) {
    costLabel = "Premium";
    labelClassName = "label-premium";
  }
  return (
    <li key={plan.id}>
      <img src={plan.image} alt="image"></img>
      <div className="details">
        <h2>
          {plan.destination} {`(${plan.days} days)`}
        </h2>
        <p className="description">{plan.description}</p>
        <p>
          <span className="price">Price:</span> {plan.totalCost}€
        </p>
        {costLabel && (
          <span className={`label ${labelClassName}`}>{costLabel}</span>
        )}
        {plan.allInclusive && (
          <span className="label all-inclusive">All-inclusive</span>
        )}
        <div className="button-container">
          <button className="delete-btn" onClick={() => handleClick(plan.id)}>
            Delete
          </button>
          <button
            className="favorite-btn"
            style={{ backgroundColor: favoriteColor }}
            onClick={() => handleClickFavorite(plan.id)}
          >
            ♡
          </button>
        </div>
      </div>
    </li>
  );
}
export default TravelPlanCard;
