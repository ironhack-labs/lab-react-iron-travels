import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import "../App.css";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const handleRemove = (id) => {
    const updatedData = travelPlans.filter((plan) => plan.id !== id);
    setTravelPlans(updatedData);
  };

  return (
    <div class="container">
      <h1>Travel Plans</h1>

      {travelPlans.map((plan) => {
        let labels = [];

        return (
          <div key={plan.id} class="box">
            <h3 class="title">
              {" "}
              {plan.destination} ( {plan.days} Days)"{" "}
            </h3>

            <img class="image" src={plan.image} alt="" />

            <p class="description"> {plan.description} </p>
            <p class="price"> Price : {plan.totalCost} </p>
            <p class="price">
              {plan.totalCost <= 350 ? (
                <label class="greatdeal" title="Great Deal">
                  {" "}
                  Great Deal
                </label>
              ) : (
                ""
              )}

              {plan.totalCost >= 1500 ? (
                <label class="premium" title="Premium">
                  Premium
                </label>
              ) : (
                ""
              )}

              {plan.allInclusive ? (
                <label class="premium" title="All inclusive">
                  All inclusive
                </label>
              ) : (
                ""
              )}
            </p>

            <button id="delete" onClick={() => handleRemove(plan.id)}>
              {" "}
              Delete{" "}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default TravelList;