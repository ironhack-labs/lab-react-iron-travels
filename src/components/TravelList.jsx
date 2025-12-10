import { useState } from "react";
import travelsPlansData from "../assets/travel-plans.json";

function TravelList() {
  console.log(travelsPlansData);
  const [trips, setTrips] = useState(travelsPlansData);

  function handleDelete(tripId) {
    const filteredTrips = trips.filter((trip) => trip.id !== tripId);
    console.log("delete button pressed.", tripId);
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
                  <strong>
                    {trip.destination} <span>({trip.days} Days)</span>
                  </strong>
                </p>
                <p className="description">
                  <i>{trip.description}</i>
                </p>
                <p className="price">
                  <strong>Price : </strong>
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
                  onClick={() => {
                    handleDelete(trip.id);
                  }}
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
}

export default TravelList;
