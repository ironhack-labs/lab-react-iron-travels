import travelPlansData from "../data/travel-plans.json";
import { useState } from "react";

const TravelList = () => {
  const [travelList, setTravelList] = useState(travelPlansData);

  const getLabel = (cost) => {
    if (cost <= 350) {
      return "Great Deal";
    } else if (cost >= 1500) {
      return "Premium";
    } else {
      return "";
    }
  };

  const deleteItinerary = (itineraryID) => {
    const filteredItinerarys = travelList.filter((itinerary) => {
      return itinerary.id !== itineraryID;
    });
    setTravelList(filteredItinerarys);
  };

  return (
    <>
      {travelList.map((itinerary) => {
        return (
          <div className="card">
            <h1>{itinerary.destination}</h1>
            <img src={itinerary.image} alt="" className="mainimg" />
            <p>{itinerary.description}</p>
            <p>{itinerary.totalCost}</p>
            <p>
              <span>{getLabel(itinerary.totalCost)} </span>
              {itinerary.allInclusive ? <span>All-Inclusive</span> : null}
            </p>
            <button type="button" onClick={() => deleteItinerary(itinerary.id)}>
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
};

export default TravelList;
