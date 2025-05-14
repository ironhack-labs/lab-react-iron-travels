import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import "./TravelList.css";

function TravelList() {
  const [TravelListArr, setTravelListArr] = useState(travelPlansData);
  const handleEliminarVoyage = (index) => {
    console.log("prueba");
    const cloneState = [...TravelListArr];
    cloneState.splice(index, 1);
    setTravelListArr(cloneState);
  };
  return (
    <div id="tout">
      <h1>Iron Travels</h1>
      <h2>Tailored travel plans for Ironhackers</h2>
      <div id="all-voyage">
        {TravelListArr.map((eachTravel, index) => {
          return (
            <div key={index} id="voyage-container">
              <img src={eachTravel.image} alt="" />
              <div id="data-voyage">
                <h1>
                  {eachTravel.destination} ({eachTravel.days} Days)
                </h1>
                <p id="description">{eachTravel.description}</p>
                <p>
                  <span>Price:</span>
                  {eachTravel.parts[0].cost}€
                </p>
                <div id="labels">
                  {eachTravel.parts[0].cost <= 350 && (
                    <p id="great-deal">Great Deal</p>
                  )}
                  {eachTravel.parts[0].cost >= 1500 && (
                    <p id="Premium">Premium</p>
                  )}
                  {
                    (eachTravel.false = true && (
                      <p id="All-Inclusive">All-Inclusive</p>
                    ))
                  }
                </div>
                <div></div>
                <button
                  onClick={() => handleEliminarVoyage(index)}
                  id="delete-btn"
                >
                  {" "}
                  🗑️ Delete{" "}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TravelList;
