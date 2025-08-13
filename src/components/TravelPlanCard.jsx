// import { useState } from "react";

function TravelPlanCard({ plan: { image, destination, days, description, totalCost, allInclusive }, index, onDelete, onAddFav, favBgColorIndex }) {
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  return (
    <div className="travel-item">
      <img src={image} alt="Travel image" className="travel-image"/>
      <div className="travel-info">
        <h3>{destination} ({days} Day{(days > 1) && "s"})</h3>
        <p className="travel-description">{description}</p>
        <p className="travel-price">Price: <span>{totalCost} €</span></p>
        <div className="label-container">
          {(totalCost <= 350) && <div className="travel-label great-deal-label">Great deal</div>}
          {(totalCost >= 1500) && <div className="travel-label premium-label">Premium</div>}
          {allInclusive && <div className="travel-label all-inclusive-label">All Inclusive</div>}
        </div>
        <div className="buttons-container">
          <button className="delete-travel-btn" onClick={() => onDelete(index)}>Delete</button>
          <button className="fav-plan-btn" style={{ backgroundColor: colors[favBgColorIndex] }} onClick={() => onAddFav({ image, destination, days, totalCost }, index)}>♡</button>
        </div>
      </div>
    </div>
  );
}
export default TravelPlanCard;
