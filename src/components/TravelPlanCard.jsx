import React from "react";
import "./TravelPlanCard.css";
import Label from "./Label";

const TravePlanCard = ({ id, image, destination, days, description, totalCost, allInclusive, onDelete }) => {
  return (
    <article className="travelCard">
      <img className="travelImg" src={image} alt={destination} />
      <section>
        <h3>{`${destination} (${days} Days)`}</h3>
        <p className="italic">{description}</p>
        <p>
          <span className="bold">Price:</span> {totalCost} €
        </p>
        <section className="labelSection">
          {totalCost < 350 ? <Label text={"Great Deal"} classType="great" /> : null}
          {totalCost > 1500 ? <Label text={"Prenium"} classType="prenium" /> : null}
          {allInclusive ? <Label text={"All inclusive"} classType="inclusive" /> : null}
        </section>
        <button onClick={() => onDelete(id)}>Delete</button>
      </section>
    </article>
  );
};

export default TravePlanCard;
