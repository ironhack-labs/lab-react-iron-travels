import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

export default function TravelList() {
  const [trips, setTrips] = useState(travelPlansData);
  const [favoriteTrips, setFavorite] = useState([]);

  function deleteTrip(id) {
    const updatedList = trips.filter((trip) => trip.id !== id);
    setTrips(updatedList);
  }

  function addToFavorite(trip) {
    const updatedFavoriteList = [...favoriteTrips, trip];
    setFavorite(updatedFavoriteList);
  }

  return (
    <div className="main">
      <div className="trips_wrapper">
        {trips.map((trip) => {
          return (
            <TravelPlanCard
              trip={trip}
              key={trip.id}
              remove={deleteTrip}
              addToFavorite={addToFavorite}
            />
          );
        })}
      </div>
      {favoriteTrips.length !== 0 && (
        <div className="favorite_trips_wrapper">
          <h2>Favorites</h2>
          {favoriteTrips.map((trip) => {
            return (
              <div className="cardContainer" key={trip.id}>
                <figure>
                  <img src={trip.image} alt={trip.destination} />
                </figure>
                <div className="descrWrapper">
                  <div>
                    <h3 className="descrWrapper_header">
                      {trip.destination} <span>({trip.days} days)</span>
                    </h3>
                    <p className="descrWrapper_tripDescr">{trip.description}</p>
                    <p className="descrWrapper_total">
                      <span>Price:</span>
                      {trip.totalCost}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
