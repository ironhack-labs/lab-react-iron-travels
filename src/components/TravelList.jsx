import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

function TravelList() {
  const [travelPlansToDisplay, settravelPlansToDisplay] =
    useState(travelPlansData);

  const deleteTravel = (id) => {
    const updatedData = travelPlansToDisplay.filter((elm) => elm.id !== id);
    settravelPlansToDisplay(updatedData);
  };

  return (
    <section className="TravelList">
      {travelPlansToDisplay.map((travelPlanDetails) => {
        return (
          <div key={travelPlanDetails.id} className="travel plans">
            <img src={travelPlanDetails.image} alt="" />
            <h2>{travelPlanDetails.destination}</h2>

            <p> {travelPlanDetails.description}</p>
            <p>
              <strong>Price: </strong>
              {travelPlanDetails.totalCost} €
            </p>

            <div>
              {travelPlanDetails.totalCost < 350 ? "Great Deal" : "Premium"}
            </div>
            <button onClick={() => deleteTravel(travelPlanDetails.id)}>
              Delete
            </button>
          </div>
        );
      })}
    </section>
  );
}

export default TravelList;
