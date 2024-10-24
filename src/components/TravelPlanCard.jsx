import { useState } from "react";
export default function TravelPlanCard(props) {
  const [Display, SetDisplay] = useState(true);

  const deletePlan = () => {
    SetDisplay(false);
  };
  if (Display) {
    return (
      <div className="travelList">
        <img src={props.card.image} alt={props.card.destination} />
        <div className="text">
          <h2>{props.card.destination}</h2>
          <p>{props.card.description}</p>
          <p>
            <b>Price: </b>
            {props.card.totalCost} $
          </p>
          <p>
            {props.card.totalCost < 350 ? (
              <span className="labels greatDeal">Great Deal</span>
            ) : props.card.totalCost > 1500 ? (
              <span className="labels ">Premium</span>
            ) : null}

            {props.card.allInclusive ? (
              <span className="labels">All inclusive</span>
            ) : null}
          </p>
          <button onClick={deletePlan}>Delete</button>
        </div>
      </div>
    );
  }
}
