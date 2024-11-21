import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

const TravelList = () => {
  const [destinations, setDestinations] = useState(travelPlansData);

  function handleDeleteDestination(destId) {
    // filter makes a new array
    const filteredDests = destinations.filter((dest) => {
      if (dest.id !== destId) {
        return true;
      }
    });
    setDestinations(filteredDests);
  }
  return (
    <div>
      {destinations.map((dest) => {
        const {
          id,
          destination,
          image,
          days,
          allInclusive,
          totalCost,
          description,
          parts,
        } = dest;
        return (
          <div key={id} className="destination">
            <img src={image} />

            <div className="destination-description">
              <h4>
                {destination} ({days} days)
              </h4>
              <i>{description}</i>
              <p>
                <b>Price: </b>
                {totalCost}
              </p>
              <div className="labels">
                {totalCost <= 350 ? (
                  <p className="green-label">Great Deal</p>
                ) : totalCost >= 1500 ? (
                  <p className="blue-label">Premium</p>
                ) : (
                  <p></p>
                )}
                {allInclusive ? (
                  <p className="blue-label">All Inclusive</p>
                ) : (
                  <p></p>
                )}
              </div>
              <button
                onClick={() => {
                  handleDeleteDestination(id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TravelList;
