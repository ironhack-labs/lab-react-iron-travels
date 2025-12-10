import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  return (
    <>
      {travelPlans.map((plans) => (
        <div id="travel-card">
          <div id="travel-image-container">
            <img src={plans.image} alt={plans.destination} />
          </div>
          <div id="travel-info-container">
            <h2 id="destination">
              {plans.destination} ({plans.days} Days)
            </h2>
            <p>
              <i>{plans.description}</i>
            </p>
            <p>
              <strong>Price: </strong>
              {plans.totalCost}€
            </p>
            <div id="accomodation-btn-container">
              <button>Premium</button>
              <button>All-Inlusive</button>
            </div>
            <div id="delete-like-container">
              <button onClick={() => onDelete(plans.id)}>Delete</button>
              <button>Like</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default TravelList;
