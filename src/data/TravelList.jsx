import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import "../App.css";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const deleteButton = (id) => {
    const updatedPlans = travelPlans.filter((plan) => plan.id !== id);
    setTravelPlans(updatedPlans);
  };

  return (
    <div className="travel-list">
      <ul>
        {travelPlans.map((item) => {
          let costLabel = "";
          if (item.totalCost <= 350) {
            costLabel = "Great Deal";
          } else if (item.totalCost >= 1500) {
            costLabel = "Premium";
          }

          return (
            <li key={item.id} className="travel-item">
              <img
                src={item.image}
                alt={item.destination}
                className="travel-image"
              />
              <div className="travel-details">
                <div className="travel-header">
                  <h2>
                    {item.destination}, ({item.days} Days)
                  </h2>
                </div>
                <p>{item.description}</p>
                <p className="travel-cost">
                  <b>Price</b>: {item.totalCost}€
                </p>
                {costLabel && (
                  <span className="label cost-label">{costLabel}</span>
                )}

                {item.allInclusive && (
                  <span className="label all-inclusive">All Inclusive</span>
                )}
              </div>
              <button
                className="delete-button"
                onClick={() => deleteButton(item.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default TravelList;
