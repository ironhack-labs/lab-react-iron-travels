import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
export const TravelList = () => {
  const [tripState, setTripState] = useState(travelPlansData);
  console.log(tripState);
  const handleDelete = (tripId) => {
    console.log("delete clicked", tripId);
    const filteredTrips = tripState.filter((trip) => {
      if (trip.id !== tripId) {
        return true;
      }
    });
    console.log(filteredTrips);
    setTripState(filteredTrips);
  };
  return (
    <div>
      {tripState.map((oneTrip) => {
        return (
          <div key={oneTrip.id} className="trip" style={{ display: "flex" }}>
            <img
              src={oneTrip.image}
              alt="trip image"
              style={{ width: "200px" }}
            />
            <div>
              <h2>
                {oneTrip.destination} ({oneTrip.days}days)
              </h2>
              <h2>{oneTrip.description}</h2>
              <h2>Price: {oneTrip.totalCost}$</h2>
              {oneTrip.totalCost < 350 ? (
                <button>Great Deal</button>
              ) : oneTrip.totalCost > 1550 ? (
                <button>Premium</button>
              ) : null}
              {}
              <button
                onClick={() => {
                  handleDelete(oneTrip.id);
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
};
