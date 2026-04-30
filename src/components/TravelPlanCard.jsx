import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelPlanCard({ plan, onDelete }) {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const listStyle = {
    padding: "8px",
    border: "1px solid lightgrey",
    gap: "8px",
    textAlign: "left",
    margin: "8px",
  };

  const handleDelete = (id) => {
    const filteredPlans = travelPlans.filter((item) => item.id !== id);
    setTravelPlans(filteredPlans);
  };

  return (
    <div>
      {travelPlans.map((item, index) => {
        return (
          <div className="card" style={listStyle} key={index}>
            <img
              src={item.image}
              alt={item.destination}
              style={{ width: "50%", height: "100%", objectFit: "cover" }}
            />
            <div id="-details-layout">
              <h4>{item.destination}</h4>
              <p>{item.description}</p>
              <h4>{item.totalCost}€ </h4>

              <div className="offers-tab">
                {item.totalCost <= 350 && (
                  <span>
                    <h6>Great Deal!</h6>
                  </span>
                )}
                {item.totalCost >= 1500 && (
                  <span>
                    <h6>Premium!</h6>
                  </span>
                )}

                {item.allInclusive === true && (
                  <span>
                    <h6 className="allinclusive">All Inclusive!</h6>
                  </span>
                )}
              </div>

              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TravelPlanCard;
