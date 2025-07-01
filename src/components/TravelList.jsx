import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [data, setData] = useState(travelPlansData);

  console.log(travelPlansData);
  function getLabels(plan) {
    const labels = [];

    if (plan.totalCost <= 350) labels.push("Great Deal");
    if (plan.totalCost >= 1500) labels.push("Premium");
    if (plan.allInclusive) labels.push("All Inclusive");

    return labels;
  }

  const handleDelete = (id) => {
    setData(data.filter((elem) => elem.id !== id));
  };

  return (
    <div>
      {data.map((elem) => (
        <div key={elem.id} className="travel-card">
          <img src={elem.image} className="travel-card__img" />
          <div className="travel-card__content">
            <h3>
              {elem.destination}, <span>({elem.days} days)</span>
            </h3>
            <div>{elem.description}</div>
            <div>Price: {elem.parts[0].cost} eur.</div>

            <div className="travel-card__labels">
              {getLabels(elem).map((label) => (
                <span className="label" key={label}>
                  {label}
                </span>
              ))}
            </div>
            <button
              className="delete-btn"
              onClick={() => handleDelete(elem.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default TravelList;
