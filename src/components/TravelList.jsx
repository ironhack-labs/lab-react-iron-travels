import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

function TravelList() {
  const [travelList, setTravelList] = useState(travelPlansData);

  const getLabel = (totalCost, allInclusive) => {
    let label = "";
    if (totalCost <= 350) {
      label = "Great Deal";
    } else if (totalCost >= 1500) {
      label = "Premium";
    }
    if (allInclusive) {
      label += label ? " + All Inclusive" : "All Inclusive";
    }
    return label ? label : null;
  };

  const handleDelete = (id) => {
    const updatedList = travelList.filter((travel) => travel.id !== id);
    setTravelList(updatedList);
  };

  return (
    <div id="travelList">
      {travelList.map((travel) => {
        const label = getLabel(travel.totalCost);
        return (
          <div className="card" key={travel.id}>
            <h3>
              {travel.destination} ({travel.days} days)
            </h3>
            {label && <p className="label">{label}</p>}
            {travel.allInclusive ? (
              <p className="label">All Inclusive</p>
            ) : null}
            <p>Price: ${travel.totalCost}</p>
            <p>{travel.description}</p>
            <p>
              {travel.parts.name}
              {travel.parts.description}
              {travel.parts.cost}
            </p>
            <button onClick={() => handleDelete(travel.id)}>Delete</button>
            <img src={travel.image} alt="travel image" />
          </div>
        );
      })}
    </div>
  );
}

export default TravelList;
