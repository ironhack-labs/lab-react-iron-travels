import { useState } from "react";
import travelsPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

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
          <TravelPlanCard
            key={trip.id}
            trip={trip}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
}

export default TravelList;
