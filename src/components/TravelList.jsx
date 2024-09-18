import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelListStyle from "./TravelList.css";

export default function TravelList() {
  const [travelItems, setTravelItems] = useState(travelPlansData);
  const deleteViaje = (index) => {
    const lista = travelItems.slice(0)
    lista.splice(index, 1)
    setTravelItems(lista)
  }

  return (
    <div className="viajesCont">
      {travelItems.map((trip, index) => {
        // Define pStyle inside the map function to use the current trip
        const pStyle = {
          backgroundColor:
            trip.totalCost <= 350 ? "green"
            : trip.totalCost > 1500 ? "blue"
            : "transparent"
        };

        return (
          <div key={index} className="viajes">
            <img src={trip.image} alt="" />
            <div className="texto">
              <h2>{trip.destination} {trip.days} days</h2>
              <p>{trip.description}</p>
              <p><strong>Price:</strong> {trip.totalCost} €</p>
              <div className="dealzContainer">
                <p style={pStyle} className="dealz"> 
                  {
                    trip.totalCost <= 350 ? "Great Deal"
                    : trip.totalCost > 1500 ? "Premium"
                    : null
                  }
                </p>
                <p className="allInclusive">
                  {trip.allInclusive === true ? "All-Inclusive" : "self-catering"}
                </p>
              </div>
              <button onClick={deleteViaje} className="deleteBtn">DELETE</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
