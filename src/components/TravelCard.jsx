import React from "react";

export const TravelCard = ({ element, setTravelDetail, handleDelete }) => {

  const label =
    element.totalCost <= 350
      ? "Great Deal"
      : element.totalCost >= 1500
      ? "Permium"
      : "";
  const allInclusive = element.allInclusive ? "All-Inclusive" : "";

  return (
    <div className="cardContainer">
      <div>
        <img className="img" src={element.image} alt="destination image" />
      </div>
      <div className="info">
        <h3>
          {element.destination} ({element.days} days)
        </h3>
        <p>{element.description}</p>
        <p>
          <strong>price:</strong> {element.totalCost} $
        </p>
        <div className="labels">
          <p>{label}</p>
          <p>{allInclusive}</p>
        </div>
        <button onClick={() => handleDelete(element.id)}>Delete</button>
      </div>
    </div>
  );
};
