import React from "react";

function TravelPlanCard(props) {
  return (
    <div className="TravelList-item" key={props.plan.id}>
      <img src={props.plan.image} alt={props.plan.destination} />
      <h1>{props.plan.destination}</h1>
      <p>{props.plan.description}</p>
      <p>Cost: {props.plan.totalCost}€</p>
      <button onClick={() => props.handleDeleteButton(props.plan.id)}>Delete</button>

      {props.plan.totalCost <= 350 ? (
        <span className="label">Great Deal</span>
      ) : (
        <span className="label">Premium</span>
      )}
      {props.plan.allInclusive === true ? (
        <span className="label">
          {" "}
          HUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUGE ALL INCLUSIVE BTW
        </span>
      ) : null}
    </div>
  );
}

export default TravelPlanCard;
