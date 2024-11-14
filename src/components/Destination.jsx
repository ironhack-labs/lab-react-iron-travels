import React from "react";

const Destination = ({ locations, setLocations }) => {
  function handleDelete(theLocationId) {
    console.log("Location has been deleted", theLocationId);
    const filteredLocation = locations.filter((oneLocation) => {
      if (oneLocation.id !== theLocationId) {
        return true;
      } else {
        return false;
      }
    });
    console.log("filtered Locations", filteredLocation);
    setLocations(filteredLocation);
  }

  return (
    <div>
      {locations.map((currentLocation) => {
        return (
          <div className="destination-card" key={currentLocation.id}>
            <img
              className="img-destination"
              src={currentLocation.image}
              alt={currentLocation.destination}
            />

            <div className="destination-text">
              <h2>
                {currentLocation.destination} ({currentLocation.days} Days)
              </h2>
              <p>{currentLocation.description}</p>
              <h3>
                Price{" "}
                <span className="price">{currentLocation.totalCost} €</span>
              </h3>
              <div className="labels">
                {currentLocation.totalCost <= 350 && (
                  <label className="deal">Great Deal</label>
                )}
                {currentLocation.totalCost > 1500 && (
                  <label className="premium">Premium</label>
                )}
                {currentLocation.allInclusive && (
                  <label className="inclusive">All Inclusive</label>
                )}
              </div>
              <button
                className="delete"
                onClick={() => {
                  handleDelete(currentLocation.id);
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

export default Destination;
