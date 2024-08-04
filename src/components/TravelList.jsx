import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

function TravelList() {
  const [destinations, setDestinations] = useState(travelPlansData);

  const deleteItem = (destinationId) => {
    const filteredDestinations = destinations.filter(
      (destination) => destination.id !== destinationId
    );

    setDestinations(filteredDestinations);
  };
  return (
    <>
      <div>
        <ul className="destinationList">
          {destinations.map((destination) => (
            <li
              className="destinationCards"
              key={destination.id}
              destination={destination}
            >
              <img
                src={destination.image}
                alt="destination"
                width="50%"
                height="50%"
                margin="0"
                padding="0"
              />
              <div className="destinationText">
                <h2>
                  {destination.destination} ({destination.days} Days)
                </h2>
                <p>{destination.description}</p>
                <p>Price: €{destination.totalCost}</p>
                {destination.totalCost <= 350 ? (
                  <label className="dealLabels green">Great Deal</label>
                ) : (
                  <label className="dealLabels blue">Premium</label>
                )}
                {destination.allInclusive && (
                  <label className="dealLabels blue">All-Inclusive</label>
                )}
                <button
                  onClick={() => deleteItem(destination.id)}
                  className="btn-delete"
                >
                  🗑️
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TravelList;
