import React from "react";

const DestinationCard = ({ location, handleDelete }) => {
  const onDelete = () => {
    handleDelete(location.id); // Call handleDelete with location.id
  };
  return (
    <div
      className="container"
      style={{
        border: "1px solid black",
        padding: "1rem",
        margin: "1rem",
        display: "grid",
        gap: "30px",
        gridTemplate: "1fr / 1fr 1fr",
      }}
    >
      <div>
        <img
          src={location.image}
          alt={location.destination}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="textContainer" style={{ textAlign: "left" }}>
        <h1>
          {location.destination} ({location.days} days)
        </h1>
        <p>
          <i>{location.description}</i>
        </p>
        <p>
          <b>Price:</b> {location.totalCost}
        </p>
        <div>
          {location.totalCost > 1500 && (
            <p className="premiumLabel"> Premium</p>
          )}
          {location.allInclusive && (
            <p className="allInclusive"> All Inclusive</p>
          )}
        </div>
        {location.totalCost < 350 && <p className="dealLabel">Great Deal</p>}
      </div>
      <div>
        <button type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;
