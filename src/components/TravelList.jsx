import React, { useState } from "react";

function TravelList(props) {
  return (
    <li id="cards">
      <div>
        <h1 id="des">
          {props.destination}
          <span>({props.days})</span>
        </h1>
        <p>{props.description}</p>
        <p>price:{props.totalCost}</p>

        {props.totalCost < 350 ? (
          <p style={{ fontWeight: "bolder", color: "silver" }}>Great Deal</p>
        ) : null}
        {props.totalCost > 1500 ? (
          <p style={{ fontWeight: "bolder", color: "goldenrod" }}>Premium</p>
        ) : null}
        {props.allInclusive && <p>All Inclusive✅</p>}
        <button id="btn" onClick={() => props.handleDelete(props.id)}> Delete</button>
        <button onClick={()=> props.handleFav(props.plan)}>❤︎⁠</button>
      </div>

      <img id="cardImg" src={props.image} />
    </li>
  );
}

export default TravelList;
