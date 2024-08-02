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
    <ul className="destinationList">
      {destinations.map((destination) => (
        <li className="destinationCards" key={destination.id}>
          <img
            src={destination.image}
            alt={`image of ${destination.destination}`}
            width="45%"
            height="45%"
          />
          <div className="destinationText">
            <h2>
              <b>{`${destination.destination} (${destination.days} days)`}</b>
            </h2>
            <p>{destination.description}</p>
            <p>
              <b>Price: </b>
              {`${destination.totalCost} €`}
            </p>
            <div className="dealLabels">
              {destination.totalCost <= 350 ? (
                <p className="green">Great Deal</p>
              ) : destination.totalCost >= 1500 ? (
                <p className="blue">Premium</p>
              ) : null}

              {destination.allInclusive ? (
                <p className="blue">All-Inclusive</p>
              ) : null}
            </div>
            <button
              onClick={() => deleteItem(destination.id)}
              className="delete-button"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TravelList;
