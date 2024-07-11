import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [place, setPlace] = useState(travelPlansData);

  return (
    <div className = "todo">
      {place.map((eachPlace) => {
        return (
          <div className = "card-place">
            <img src={eachPlace.image} alt="" width="249px" />
            <div className="text">
            <h3>
              {eachPlace.destination}{" "}
              <span>
                {"("}
                {eachPlace.days}
                {"Days)"}
              </span>
            </h3>
            <p>{eachPlace.description}</p>
            <h3>Price: {eachPlace.totalCost}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TravelList;
