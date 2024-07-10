import { useState } from "react";
import travelPlanData from "../assets/travel-plans.json";

function TravelList() {
  const [travelPlan, setTravelPlan] = useState(travelPlanData);
  const handleDeleteBtn = (index) => {
    //console.log("clicked");
    const arrCopy = [...travelPlan];
    arrCopy.splice(index, 1);
    setTravelPlan(arrCopy);
  };
  return (
    <div id="web">
      {travelPlan.map((travelPlan, index) => {
        return (
          <div key={index} id="marco">
            <img src={travelPlan.image} alt="aaa" />
            <div id="info">
              <h2>{travelPlan.destination}</h2>
              <p>{travelPlan.description}</p>
              <p>
                <strong>Price: </strong>
                {travelPlan.totalCost}€
              </p>
              <span>
                {travelPlan.totalCost <= 350 ? (
                  <p id="greatDeal">Great Deal</p>
                ) : travelPlan.totalCost >= 1500 ? (
                  <p id="premium">Premium</p>
                ) : (
                  <p></p>
                )}
              </span>
              <span>
                {travelPlan.allInclusive && (
                  <span id="allin">All-inclusive</span>
                )}
              </span>
              <br />
              <button
                id="deleteBtn"
                onClick={() => {
                  handleDeleteBtn(index);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TravelList;
