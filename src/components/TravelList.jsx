import React from "react";

const TravelList = (props) => {
  return (
    <div className="fullCard">
      <section className="cardImage">
        <img src={props.cityData.image} alt="City Image" className="oneImage" />
      </section>
      <section className="cardDescription">
        <h2>
          {props.cityData.destination} ({props.cityData.days} Days)
        </h2>
        <h4>
          {props.cityData.totalCost <= 350
            ? "Great deal! 🤑"
            : props.cityData.totalCost >= 1500
            ? "PREMIUM 👑"
            : null}
          {props.cityData.allInclusive === true ? "All-Inclusive 🍹" : null}
        </h4>
        <p className="oneDescription">
          <i>{props.cityData.description}</i>
        </p>
        <p className="onePrice">
          <b>Price is</b> {props.cityData.totalCost} €
        </p>
        <button
          onClick={() => {
            props.handleDelete(props.cityData.id);
          }}
        >
          Delete
        </button>
      </section>
    </div>
  );
};

export default TravelList;
