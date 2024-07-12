import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
export default function TravelList() {
  const [travels, setTravels] = useState(travelPlansData);
  function deleteTravel(travelId) {
    const filteredArray = travels.filter((travel) => travel.id !== travelId);
    setTravels(filteredArray);
  }
  return (
    <>
      {travels.map((travel) => {
        return (
          <div className="list-item-wrapper" key={travel.id}>
            <div className="thumbnail-wrapper">
              <img className="thumbnail" src={travel.image} />
            </div>
            <div className="travel-info-wrapper">
              <h3>
                {travel.destination} ({travel.days} Days)
              </h3>
              <p>{travel.description}</p>
              <p>
                <b>Price: </b> {travel.totalCost} €
              </p>
              <div className="btn-wrapper">
                {travel.allInclusive && (
                  <button className="blue-btn">All-Inclusive</button>
                )}
                {travel.totalCost >= 1500 && (
                  <button className="blue-btn">Premium</button>
                )}
                {travel.totalCost <= 350 && (
                  <button className="green-btn">Great Deal</button>
                )}
              </div>
              <div>
                <button onClick={() => deleteTravel(travel.id)}>Delete</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
