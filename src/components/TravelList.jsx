import React, { useState } from "react";
import travelDatas from "../assets/travel-plans.json";
let TravelList = () => {
  const [travelData, setTravelData] = useState(travelDatas);

  const deleteBtn = (id) => {
    // Filter out the item with the specified id
    const updatedTravelData = travelData.filter((elem) => elem.id !== id);
    setTravelData(updatedTravelData);
  };

  let mappedData = travelData.map((elem) => {
    return (
      <div key={elem.id} className="travelList">
        <div className="imgContainer">
          <img className="myImg" src={elem.image} alt="image" />
        </div>
        <section className="travenInfo">
          <p>
            {elem.destination} ({elem.days} Days)
          </p>
          <p>{elem.description}</p>
          <p>Price: {elem.totalCost}€</p>
          {elem.totalCost <= 350 && (
            <label className="greatDeal">Great Deal</label>
          )}
          {elem.totalCost >= 1400 && (
            <div className="labelContainer">
              <label>Premium</label> <label>All-Inclusive</label>
            </div>
          )}
        </section>
        <div className="deletBtnContainer">
          <button
            onClick={() => {
              deleteBtn(elem.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  });
  return mappedData;
};
export default TravelList;
