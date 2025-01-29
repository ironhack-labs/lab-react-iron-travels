import React from "react";
import styles from "./ListComponent.css";

export default function ListComponent({ destination, onDelete }) {
  const labelText = () => {
    if (destination.totalCost <= 350) {
      return { label: "Great Deal", color: "green" };
    } else if (destination.totalCost >= 1500) {
      return { label: "Premium", color: "blue" };
    } else {
      return { label: "", color: "none" };
    }
  };

  const labelText2 = () => {
    if (destination.allInclusive) {
      return { label: "All-Inclusive", color: "blue" };
    } else {
      return { label: "", color: "none" };
    }
  };

  const { label, color: labelColor } = labelText();
  const { label: label2, color: labelColor2 } = labelText2();

  

  return (
    <div id="list-component">
      <img src={destination.image} alt={destination.name} />
      <div id="text">
        <h2>{destination.destination}</h2>
        <p>
          <em>{destination.description}</em>
        </p>
        <p>
          <span>Price:</span> {destination.parts[0].cost} €
        </p>
        <label style={{ backgroundColor: labelColor }}>{label}</label>
        <label style={{ backgroundColor: labelColor2 }}>{label2}</label>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}
