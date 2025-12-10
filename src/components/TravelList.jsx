import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

const TravelList = () => {
  const [trips, setTrips] = useState(travelPlansData);
  const handleDelete = (idToDelete) => {
    const updatedTrips = trips.filter((oneTrip) => oneTrip.id !== idToDelete);
    setTrips(updatedTrips);
  };
  
  return (
    <div className="trip-list">
      {trips.map((oneTrip) => (
        <div key={oneTrip.id} className="trip-card">
          <img
            src={oneTrip.image}
            alt={oneTrip.destination}
            className="trip-image"
          />
          <div className="trip-info">
            <h2>
              {oneTrip.destination} ({oneTrip.days} Days)
            </h2>
            <p>{oneTrip.description}</p>
            <p>
              <strong>Price:</strong> {oneTrip.totalCost} €
            </p>
            <div className="trip-labels">
                {oneTrip.totalCost <= 350 && <span className="label deal">Great Deal</span>}
                {oneTrip.totalCost >= 1500 && <span className="label premium">Premium</span>}
                {oneTrip.allInclusive && <span className="label inclusive">All Inclusive</span>}
            </div>
            <button className="delete-button" onClick={() => handleDelete(oneTrip.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TravelList;
