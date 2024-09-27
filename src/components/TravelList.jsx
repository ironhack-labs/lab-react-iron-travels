import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";
import "./TravelList.css";

export default function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const deleteTravel = (id) => {
    const updatedData = travelPlans.filter((e) => e.id !== id);
    setTravelPlans(updatedData);
  };

  return (
    <section className="travelList">
      {travelPlans.map((travelPlanDetails) => {
        return (
          <div key={travelPlanDetails.id} className="travelplans">
            <img
              src={travelPlanDetails.image}
              alt={travelPlanDetails.destination}
            />
            <div className="info">
              <h2 className="destination">
                {travelPlanDetails.destination} ({travelPlanDetails.days} Days)
              </h2>

              <p className="description"> {travelPlanDetails.description}</p>
              <p>
                <strong>Price: </strong>
                {travelPlanDetails.totalCost} €
              </p>

              <div className="label">
                {travelPlanDetails.totalCost <= 350 && (
                  <p className="deal">Great Deal!</p>
                )}

                {travelPlanDetails.totalCost >= 1500 && (
                  <p className="premium">Premium</p>
                )}

                {travelPlanDetails.allInclusive && (
                  <p className="inclusive">All Inclusive</p>
                )}
              </div>
              <button
                className="delete"
                onClick={() => deleteTravel(travelPlanDetails.id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
}
