import React from "react";
import "./styleFavorites.css";

export const Favorites = (props) => {
  return (
    <div className="containerFavorites">
      <img src={props.elem.image} alt="" />
      <h2>
        {props.elem.destination}({props.elem.days} Days)
        <p>Price: {props.elem.totalCost}</p>
      </h2>
    </div>
  );
};
