import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import "./travelList.css";

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const handleDelete = (id) => {
    setTravelPlans(travelPlans.filter((travel) => travel.id !== id));
  };

  return (
    <section>
      {travelPlans.map((travel) => {
        let costLabel = "";
        if (travel.totalCost <= 350) {
          costLabel = "Great Deal";
        } else if (travel.totalCost >= 1500) {
          costLabel = "Premium";
        }

        return (
          <div key={travel.id} className="container">
            <div className="image-container">
              <img
                src={travel.image}
                alt={`representation of ${travel.destination}`}
              />
            </div>
            <div className="content">
              <h2>
                {travel.destination} ({travel.days}{" "}
                {travel.days > 1 ? "Days" : "Day"})
              </h2>
              <p>{travel.description}</p>
              <p>
                <em>Price :</em> {travel.totalCost}€
                {travel.allInclusive && (
                  <span className="label">All Inclusive</span>
                )}
                {costLabel && <span className="label">{costLabel}</span>}
              </p>
              <button
                className="delete-button"
                onClick={() => handleDelete(travel.id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default TravelList;
