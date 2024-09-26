import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [tripsToDisplay, changeTrips] = useState(travelPlansData);

  const deleteTrip = (tripToDelete) => {
    const newTrips = tripsToDisplay.filter((elem) => elem.id !== tripToDelete);
    changeTrips(newTrips);
  };

  const tripInfo = tripsToDisplay.map((trip) => (
    <section className="travelsContainer" key={trip.id}>
      <div className="travelDiv">
        <img src={trip.image} alt={trip.destination} className="imgs" />
        <div>
          <h1>
            {trip.destination} ({trip.days} Days)
          </h1>
          <p>{trip.description}</p>
          <p>{trip.totalCost}€</p>
          {trip.totalCost < 350 && <p>Great Deal</p>}
          {trip.totalCost > 1500 && <p>Premium</p>}
          {trip.allInclusive && <p>All inclusive</p>}
          <button onClick={() => deleteTrip(trip.id)}>Delete</button>
        </div>
      </div>
    </section>
  ));

  return <div>{tripInfo}</div>;
}

export default TravelList;
