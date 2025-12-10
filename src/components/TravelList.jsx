import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

const TravelList = () => {
  const [trips, setTrips] = useState(travelPlansData);

  function handleDelete(tripId) {
    const filteredTrips = trips.filter((trip) => trip.id !== tripId);
    console.log("trip deleted", tripId);
    setTrips(filteredTrips);
  }
  return (
    <div>
      {trips.map((trip) => {
        return (
          <>
            <div className="trip">
              <img src={trip.image} alt={trip.destination} />
              <div className="info">
                <p key={trip.id}>
                  {trip.destination} <strong>({trip.days} Days)</strong>
                </p>
                <p className="description">
                  <i>{trip.description}</i>
                </p>
                <p className="price">
                  <strong>Price: </strong>
                  {trip.totalCost}€
                </p>

                <div className="deals">
                  <p
                    className="greatDeal"
                    style={{ display: trip.totalCost < 350 ? "block" : "none" }}
                  >
                    {trip.totalCost < 350 && "Great Deal"}
                  </p>

                  <p
                    className="allInclusive"
                    style={{
                      display: trip.totalCost > 1500 ? "block" : "none",
                    }}
                  >
                    {trip.totalCost > 1500 && "Premium"}
                  </p>

                  <p
                    className="allInclusive"
                    style={{ display: trip.allInclusive ? "block" : "none" }}
                  >
                    {trip.allInclusive ? "All Inclusive" : ""}
                  </p>
                </div>
                <button
                  onClick={() => handleDelete(trip.id)}
                  className="delete"
                >
                  Delete
                </button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default TravelList;
