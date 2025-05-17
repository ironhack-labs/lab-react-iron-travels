import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import "./TravelList.css";

function TravelList() {
  const [travels, setTravels] = useState(travelPlansData);

  const deleteTravel = (travelId) => {
    const newTravels = travels.filter((travel) => travel.id !== travelId);
    setTravels(newTravels);
  };

  return (
    <div className="travel-list">
      {travels.map((travel) => {
        return (
          <div className="travel-card">
            <img className="travel-card-place-image" src={travel.image}></img>
            <div className="travel-card-content">
              <h3>
                {travel.destination} ({travel.days} Days)
              </h3>
              <p>{travel.description}</p>
              <p>
                <strong>Price: </strong>
                {travel.totalCost} €
              </p>
              <div className="travel-id-content">
                {travel.totalCost >= 1500 && (
                  <p className="travel-premium">Premium</p>
                )}
                {travel.totalCost <= 350 && (
                  <p className="travel-deal">Great Deal</p>
                )}
                {travel.allInclusive && (
                  <p className="travel-premium">All-Inclusive</p>
                )}
              </div>
              <button
                onClick={() => {
                  deleteTravel(travel.id);
                }}
                className="delete-button"
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
