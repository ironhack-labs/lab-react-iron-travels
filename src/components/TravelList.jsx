import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [places, setDestinations] = useState(travelPlansData);

  const deleteDest = (placeId) => {
    const filteredDest = places.filter((place) => {
      return place.id !== placeId;
    });
    setDestinations(filteredDest);
  };

  return (
    <div>
      {places.map((place) => {
        return (
          <div className="travelCard" key={place.id}>
            <div className="grid-container">
              <img src={place.image} />
            </div>
            <div className="travelInfo">
              <h4>
                {place.destination} ({place.days} Days)
              </h4>
              <p>{place.description}</p>
              <p>
                <span className="bold">Price:</span> {place.totalCost}€
              </p>
              {place.totalCost <= 350 && (
                <p className="great-deal"> Great Deal </p>
              )}
              {place.totalCost >= 1500 && <p className="premium"> Premium </p>}
              {place.allInclusive && <p className="allIncl"> All Inclusive </p>}

              <button
                onClick={() => deleteDest(place.id)}
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
