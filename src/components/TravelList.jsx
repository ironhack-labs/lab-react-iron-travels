import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import "../components/TravelList.css";

function TravelList() {
  const [trips, setTrips] = useState(travelPlansData);
  const deleteTrip = (tripId) => {
    const filteredTrips = trips.filter((trip) => trip.id !== tripId);
    setTrips(filteredTrips);
  };

  return (
    <div>
      {trips.map((aTrip, keyIndex) => {
        return (
          <div className="travels-container" key={keyIndex}>
            <div className="travels-image">
              <img src={aTrip.image} alt="A photo of the voyage" />
            </div>
            <div className="travels-info">
              <p>
                {aTrip.destination} ({aTrip.days} Days)
              </p>
              <p>{aTrip.description}</p>
              <p>
                <strong>Price: </strong>
                {aTrip.totalCost} €
              </p>
              <div className="labels">
                {aTrip.totalCost <= 350 && (
                  <span className="label great-deal">Great Deal</span>
                )}
                {aTrip.totalCost >= 1500 && (
                  <span className="label premium">Premium</span>
                )}
                {aTrip.allInclusive && (
                  <span className="label all-inclusive">All Inclusive</span>
                )}
              </div>
              <button
                onClick={() => {
                  deleteTrip(aTrip.id);
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
