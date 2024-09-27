import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [places, setPlace] = useState(travelPlansData);

  const deletePlace = (placeId) => {
    const filteredPlaces = places.filter((place) => {
      return place.id !== placeId;
    });
    setPlace(filteredPlaces);
  };

  return (
    <div>
      {places.map((place) => {
        return (
          <div key={place.id} className="placeCard">
            <div className="place-image-container">
              <img src={place.image} alt="icon-place" className="place-image" />
            </div>
            <div className="info-place">
              <p>{place.destination}</p>
              <p>{place.description}</p>
              {/* <p>{place.totalCost}</p> */}
              <p>{`Price: ${place.totalCost}`}</p>
              <div className="place-label">
                {place.totalCost <= 350 && <p>Greate deal</p>}
                {place.totalCost >= 1500 && <p>Premium</p>}
                {place.allInclusive && <p>All Inclusive</p>}
              </div>
              <button
                onClick={() => deletePlace(place.id)}
                className="btn-delete"
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TravelList;
