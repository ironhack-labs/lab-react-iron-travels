import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

const TravelList = () => {
  const [data, setData] = useState(travelPlansData);

  const handleDelete = (id) => {
    const updatedData = data.filter((onePlan) => onePlan.id !== id);
    setData(updatedData);
  };

  const getLabels = (onePlan) => {
    const labels = [];
    if (onePlan.totalCost <= 350) {
      labels.push("Great Deal");
    } else if (onePlan.totalCost >= 1500) {
      labels.push("Premium");
    }
    if (onePlan.allInclusive) {
      labels.push("All Inclusive");
    }
    return labels;
  };

  return (
    <div>
      {data.map((onePlan) => {
        const labels = getLabels(onePlan);

        return (
          <div key={onePlan.id} className="plan-card">
            <img
              src={onePlan.image}
              alt={onePlan.destination}
              style={{ width: "200px" }}
            />
            <div className="inner-container">
              <h3>
                {onePlan.destination} ({onePlan.days} Days)
              </h3>
              <p>{onePlan.description}</p>
              <p>
                <span>Price:</span> {onePlan.totalCost}$
              </p>
              <div className="labels">
                {labels.map((label, index) => (
                  <span key={index} className="label">
                    {label}
                  </span>
                ))}
              </div>
              <button onClick={() => handleDelete(onePlan.id)}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TravelList;
