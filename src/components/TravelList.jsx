import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
  const [locations, setLocations] = useState(travelPlansData);

  function handleDeleteLocation(locationId) {
    const filteredLocations = locations.filter((selectedDeleteLocation) => {
      if (selectedDeleteLocation.id !== locationId) {
        return true;
      }
    });
    setLocations(filteredLocations);
  }
  return (
    <>
      {locations.map((currentLocation) => {
        return (
          <TravelPlanCard
            key={currentLocation.id}
            currentLocation={currentLocation}
            handleDeleteLocation={handleDeleteLocation}
          />

          // <div className="card-container" key={currentLocation.id}>
          //   <img src={currentLocation.image} alt={currentLocation.image} />
          //   <div className="card-info">
          //     <h2>
          //       {currentLocation.destination}, ({currentLocation.days} Days)
          //     </h2>
          //     <p id="description">{currentLocation.description}</p>
          //     <p>
          //       <span>Price:</span> {currentLocation.totalCost} €
          //     </p>
          //     {currentLocation.totalCost <= 350 ? (
          //       <p id="great-deal">Great Deal</p>
          //     ) : (
          //       ""
          //     )}
          //     {currentLocation.totalCost >= 1500 ? (
          //       <p id="premium">Premium</p>
          //     ) : (
          //       ""
          //     )}
          //     {/* {currentLocation.allInclusive ? (
          //       <div>
          //         <p id="premium">Premium</p>
          //         <p id="all-inclusive">All Inclusive</p>
          //       </div>
          //     ) : (
          //       ""
          //     )} */}
          //     <button id="delete"
          //       onClick={() => {
          //         handleDeleteLocation(currentLocation.id);
          //       }}
          //     >
          //       Delete
          //     </button>
          //   </div>
          // </div>
        );
      })}
    </>
  );
}

export default TravelList;
