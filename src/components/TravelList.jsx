import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import { TravelPlanCard } from "./TravelPlanCard";

export function TravelList() {
  // Initialize state with all travel plans from the JSON file
  const [displayTrips, setDisplayTrips] = useState(travelPlansData);

  // Function to delete a travel plan given its id
  const deleteTrip = (id) => {
    const updatedTrips = displayTrips.filter((trip) => trip.id !== id);
    setDisplayTrips(updatedTrips);
  };

  return (
    <div className="card-container">
      {displayTrips.map((plan) => (
        <TravelPlanCard key={plan.id} plan={plan} onDelete={deleteTrip} />
      ))}
    </div>
  );
}
