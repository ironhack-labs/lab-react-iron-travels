import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";
import "./TravelList.css";

function Delete(id){
    return(
travelPlansData.splice(id-1,0)
    )
}

function TravelList() {
  return (
    <ul className="product-card-container">
      {travelPlansData.map(
        ({
          id,
          destination,
          image,
          days,
          totalCost,
          description,
          allInclusive,
        }) => {
          return (
            <li className="product-card" key={id}>
              <img src={image} alt="" />
              <div className="description">
                <h4>
                  {destination} ({days} Days)
                </h4>
                <p>{description}</p>
                <p>{totalCost}€ </p>
                <label
                  className={
                    totalCost <= 350
                      ? "great-deal"
                      : totalCost >= 1500
                      ? "premium"
                      : ""
                  }
                >
                  {" "}
                  {totalCost <= 350
                    ? "Great Deal"
                    : totalCost >= 1500
                    ? "Premium"
                    : ""}{" "}
                </label>
                {allInclusive && (
                  <label className="premium">All-Inclusive</label>
                )}
                <button onClick={()=>Delete(id)}>Delete</button>
              </div>
            </li>
          );
        }
      )}
    </ul>
  );
}

export default TravelList;
