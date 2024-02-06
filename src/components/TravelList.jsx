import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import "./travelList.css";

function TravelList() {
  const [travelDataToDisplay, setTravlePlansData] = useState(travelPlansData);

  return (
    <section>
      {travelDataToDisplay.map((travelObj) => {
        return (
          <div className="travelList" key={travelObj.id}>
            <div className="travelList__imgcontainer">
              <img src={travelObj.image} alt="" />
            </div>
            <div className="travelList__details">
              <h2>{travelObj.destination}</h2>
              <p>{travelObj.description}</p>
              <p><strong>Price: </strong>{travelObj.totalCost} €</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default TravelList;
