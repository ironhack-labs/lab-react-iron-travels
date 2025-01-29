import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import "../components/TravelList.css";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  function handleDelete(index) {
    // Create a new array by filtering out the item at the specified index
    const newTravelPlans = travelPlans.filter(function (item, i) {
      return i !== index; // Only keep items where the index is not equal to the specified index
    });

    // Update the state with the new array
    setTravelPlans(newTravelPlans);
  }

  return (
    <>
      <div className="list">
        <ul>
          {travelPlans.map(function (plan, index) {
            return (
              <li key={index}>
                <div className="cityCard">
                  <img className="imgCities" src={plan.image} alt="" />
                  <div className="cardText">
                    <div>{plan.destination}</div>
                    <div>{plan.description}</div>
                    <div>
                      <strong>Price:</strong> {plan.totalCost}
                    </div>
                    {plan.totalCost <= 350 && (
                      <div className="label label-greatDeal">Great Deal</div>
                    )}
                    {plan.totalCost >= 1500 && (
                      <div className="label">Premium</div>
                    )}
                    {plan.allInclusive && (
                      <div className="label">All Inclusive</div>
                    )}
                    <button
                      onClick={function () {
                        handleDelete(index);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default TravelList;
