import { useState } from "react";
import travelPlansJSON from "../assets/travel-plans.json";
import FavoritesList from "./FavoritesList";

function TravelList() {
  const [travelPlans] = useState(travelPlansJSON);

  return (
    <>
      <FavoritesList favoritePlans={travelPlans} />
      <div className="TravelList" style={{ border: "1px solid red" }}>
        <div className="list">
          {travelPlans &&
            travelPlans.map((plan) => (
              <div className="TravelPlanCard" key={plan.id}>
                <div className="left-section">
                  <img src={plan.image} alt={plan.destination} />
                </div>
                <div className="right-section">
                  <h2>
                    {plan.destination}{" "}
                    <span className="sub-heading">({plan.days} Days)</span>
                  </h2>
                  <p className="destination-description">
                    <em>{plan.description}</em>
                  </p>
                  <p>
                    <b>Price:</b> {plan.totalCost} €{" "}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default TravelList;
