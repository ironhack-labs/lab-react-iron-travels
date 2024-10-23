import travelPlansData from "../assets/travel-plans.json";
import React from "react";
import { useState } from "react";

const TravelList = () => {
  const [destinationsToDisplay, setDestinationsToDisplay] =
    useState(travelPlansData);

  const deletePlan = (destinationId) => {
    const newArray = destinationsToDisplay.filter((plan) => {
      return plan.id !== destinationId;
    });

    setDestinationsToDisplay(newArray);
  };

  return (
    <div>
      {destinationsToDisplay.map((plan) => {
        let premiumLabel = "";
        let dealLabel = "";
        if (plan.totalCost <= 350) {
          dealLabel = "Great Deal";
        } else if (plan.totalCost >= 1500) {
          premiumLabel = "Premium";
        }

        return (
          <div key={plan.id} className="travel-plan">
            <img
              src={plan.image}
              alt={plan.destination}
              className="plan-image"
            />
            <div className="plan-info">
              <h2>{plan.destination}</h2>
              <p>{plan.description}</p>
              <p>Days: {plan.days}</p>
              <p>Total Cost: ${plan.totalCost}</p>
              {dealLabel && <p className="deal-label">{dealLabel}</p>}
              {premiumLabel && <p className="premium-label">{premiumLabel}</p>}
              {plan.allInclusive && <p className="label">All Inclusive</p>}

              <p>
                <button
                  onClick={() => {
                    deletePlan(plan.id);
                  }}
                >
                  Delete travel plan
                </button>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TravelList;
