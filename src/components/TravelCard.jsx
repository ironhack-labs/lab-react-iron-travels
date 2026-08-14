import React from "react";
import TravelList from "./TravelList";

function TravelCard({
  destination,
  image,
  description,
  days,
  totalCost,
  id,
  allInclusive,
  handleDelete,
}) {

  
  let badgeLabel = "";
  let badgeColor = "";
  let badgeDisplay = "";

  if (totalCost <= 350) {
    badgeLabel = "Great Deal";
    badgeColor = "#2e7d32"; // Green
  } else if (totalCost >= 1500) {
    badgeLabel = "Premium";
    badgeColor = "#1565c0"; // Blue
  }

  if (allInclusive === false){
    badgeDisplay = "none"
 
  }



  return (
    <div id="travelCard">
      <div
        id="image-wrapper"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div id="card-content-wrapper">
        <header id="card-header">
          <h2>{destination}</h2>
          <h2>({days} Days)</h2>
        </header>
        <p>{description}</p>
        <p>
          <strong>Price:</strong>
          {totalCost}
        </p>

        <div id="badge-wrapper"  >
          <div className="badge" id="badge-deal" style={{ backgroundColor: badgeColor }} >
            <p>{badgeLabel}</p>
          </div>

          <div id="badge-all-inclusive" style={{ display: badgeDisplay } } >
            <p>all inclusive</p>
          </div>
        </div>

        <button onClick={() => handleDelete(id)}>Delete</button>

      </div>
    </div>
  );
}

export default TravelCard;
