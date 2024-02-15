import React, { useState } from "react";
import travelPlansData from "../data/travel-plans.json";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const handleRemoveTravelPlan = (index) => {
    let travelPlansDataClone = JSON.parse(JSON.stringify(travelPlans));
    travelPlansDataClone.splice(index, 1);
    setTravelPlans(travelPlansDataClone);
  };

  return (
    <div className="cards-total">
      {travelPlans.map((eachObject, index) => (
        <div className="card" key={eachObject.id}>
          <div className="cardImg">
            <img src={eachObject.image} alt={eachObject.name} width="400px" />
          </div>
          <div className="cardContent">
            <h4>
              {eachObject.destination}, ({eachObject.days} days)
            </h4>
            <p>
              <i>{eachObject.description}</i>{" "}
            </p>
            <p>
              <strong>Price:</strong> {eachObject.totalCost} €
            </p>
            <div className="etiquetas">
              <p className={eachObject.totalCost >= 1500 ? "premium" : ""}>
                {eachObject.totalCost >= 1500 ? "Premium" : null}
              </p>
              <p
                className={
                  eachObject.parts[0].name === "All-Inclusive Package"
                    ? "package"
                    : ""
                }
              >
                {eachObject.parts[0].name === "All-Inclusive Package"
                  ? "All-Inclusive"
                  : null}
              </p>
              <p
                className={
                    eachObject.totalCost <= 350 ? "deal" : ""
                }
              >
                {eachObject.totalCost <= 350 ? "Great Deal" : null}
              </p>
            </div>
            <button onClick={() => handleRemoveTravelPlan(index)}>
              Borrar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TravelList;
