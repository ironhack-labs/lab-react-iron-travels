import { useState } from "react";
import assets from "../assets/travel-plans.json";

function TravelList() {
  let [tripsToDisplay, setTripsToDisplay] = useState(assets);
  const deleteTrip = (tripId) => {
    const newArray = tripsToDisplay.filter((tripObj) => {
      return tripObj.id !== tripId;
    });
    setTripsToDisplay(newArray);
  };

  return tripsToDisplay.map(function (trip) {
    return (
      <section>
        <img src={trip.image} />
        <div>{trip.destination}</div>
        <div>{trip.days} days</div>
        <div>{trip.totalCost}</div>
        <div>{trip.description}</div>
        {trip.totalCost <= 350 && <div id="great-deal">Great Deal</div>}
        {trip.totalCost >= 1500 && <div id="premium">Premium</div>}
        {trip.allInclusive === true && (
          <div id="all-inclusive">All Inclusive</div>
        )}
        <button id="delete-button" onClick={() => deleteTrip(trip.id)}>
          Delete
        </button>
      </section>
    );
  });
}

export default TravelList;
