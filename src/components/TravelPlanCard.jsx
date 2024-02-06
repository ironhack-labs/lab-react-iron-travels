import { useDebugValue, useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import "./travelList.css";

function TravelPlanCard({plan}) {
  const [travelDataToDisplay, setTravlePlansData] = useState(travelPlansData);

  const deleteTravel = (id) => {
    console.log(id);
    const updatedData = travelDataToDisplay.filter((entry) => entry.id !== id);
    console.log(updatedData);
    setTravlePlansData(updatedData);
  };

  return (
    <section className="travelList">
      {travelDataToDisplay.map((travelObj) => {
        return (
          <div className="travelList__card" key={travelObj.id}>
            <div className="travelList__card__imgcontainer">
              <img src={travelObj.image} alt="" />
            </div>
            <div className="travelList__card__details">
              <div>
                <h2>{travelObj.destination}</h2>
                <p>{travelObj.description}</p>
                <p>
                  <strong>Price: </strong>
                  {travelObj.totalCost} €
                </p>
                <div
                  className="travelList__card__details__badge"
                  style={
                    travelObj.totalCost < 350
                      ? { backgroundColor: "#77BC76", border: "#77BC76" }
                      : { backgroundColor: "#366ACA", color: "#fff" }
                  }
                >
                  {travelObj.totalCost < 350 ? "Great Deal" : "Premium"}
                </div>
              </div>
              <button onClick={() => deleteTravel(travelObj.id)}>Delete</button>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default TravelPlanCard;
