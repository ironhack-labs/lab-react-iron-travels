import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelPlanCard(props) {
  const { travelCard, deleteHoliday } = props;

  return (
    <div className="AllBoxes">
      <div className="holidayCard">
        <img src={travelCard.image} className="holidayImage" />
        <div className="cardText">
          <h1>
            {travelCard.destination} ({travelCard.days} days)
          </h1>
          <h3 className="description">{travelCard.description}</h3>
          <h3>
            <span>Price: </span>
            {travelCard.totalCost} €
          </h3>
          {travelCard.totalCost <= 350 ? (
            <button className="greenButton">Great Deal</button>
          ) : (
            ""
          )}
          {travelCard.totalCost >= 1500 ? (
            <button className="blueButton">Premium</button>
          ) : (
            ""
          )}
          {travelCard.allInclusive ? (
            <button className="blueButton">All Inclusive</button>
          ) : (
            ""
          )}
          <div className="greyButtonBox">
            <button
              onClick={() => deleteHoliday(travelCard.id)}
              className="deleteButton"
            >
              Delete
            </button>
            <button className="favoritesButton">♡</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelPlanCard;
