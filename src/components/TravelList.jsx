import { useState } from "react";
import travelPlansData from "../data/travel-plans.json";
import "./TravelList.css";

function TravelList() {
  const [destinationToShow, setDestination] = useState(travelPlansData);
  const deleteDestination = (destinationId) => {
    const newList = destinationToShow.filter(
      (destination) => destination.id !== destinationId
    );
    setDestination(newList);
  };

  return (
    <>
      <section className="TravelList">
        {destinationToShow.map((destination, index) => {

          return (
            <div className="TravelCard" key={index}>

              <div className="OneDestination">
                <img src={destination.image} alt="destination-image" />
              </div>

              <div className="DestinationInfo">
                <h2>{destination.destination}</h2>
                <p>{destination.description}</p>
                <p>
                  Price: <span>{destination.totalCost}</span>
                </p>

                <span>
                  {destination.totalCost > 350 ? "Premium" : "Great Deal!"}
                </span>

                {destination.allInclusive && <span>All Inclusive</span>}

              </div>

              <div>
                <button
                  className="DeleteButton"
                  onClick={() => {
                    deleteDestination(destination.id);
                  }}
                >
                  Remove
                </button>
              </div>

            </div>
          );
        })}
      </section>
    </>
  );
}

export default TravelList;
