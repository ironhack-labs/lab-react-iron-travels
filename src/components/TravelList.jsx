import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [place, setPlace] = useState(travelPlansData);

  const deleteListing = (listingId) => {
    console.log("It's being called");
    const copy = JSON.parse(JSON.stringify(place));
    const filteredListings = copy.filter((thelisting) => {
      return thelisting.id !== listingId;
    });
    setPlace(filteredListings);
  };
  return (
    <div className="list">
      {place.map((listing) => {
        return (
          <div key={listing.id}>
            <img src={listing.image} />
            <p>
              {listing.destination} {listing.days} days
            </p>
            <p>{listing.description}</p>
            <p>
              <b>Price: </b>
              {listing.totalCost} €
            </p>
            {listing.totalCost > 1500 && <p>Premium</p>}
            {listing.totalCost < 350 && <p>Great Deal!</p>}
            {listing.allInclusive === true && <p>All-Inclusive</p>}
            <button
              onClick={() => deleteListing(listing.id)}
              className="btn-delete"
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default TravelList;
