import React, { useState } from "react";
import travelPlans from "../assets/travel-plans.json";

function TravelList() {
  const [destino, setDestino] = useState(travelPlans);

  return (
    <div>
      {destino.map((cadaDestino) => {
        return (
          <div className="card">
            <img src={cadaDestino.image} alt="img" width="230px" />
            <div className="card-content">
              <h3>
                {cadaDestino.destination} <span>({cadaDestino.days} Days)</span>
              </h3>
              <p>{cadaDestino.description}</p>
              <p>
                Price: <span>€{cadaDestino.totalCost}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TravelList;
