import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import "./TravelList.css";

function dealOrNoDeal(totalCost) {
  if (totalCost <= 350) {
    return <span className="green">Great Deal</span>;
  } else if (totalCost >= 1500) {
    return <span className="blue">Premium</span>;
  } else {
    return null;
  }
}

function TravelList() {
  const [data, setData] = useState(travelPlansData);

  const handleDelete = (id) => {
    const updatedTravelPlans = data.filter((item) => item.id !== id);
    setData(updatedTravelPlans);
  };
  return (
    <div className="main">
      {data.map((item) => {
        return (
          <div key={item.id} className="trip-div">
            <img src={item.image} alt="pic" className="trip-pic" />
            <div className="text-div">
              <h3>
                {item.destination} ({item.days} days)
              </h3>
              <i>{item.description}</i>
              <p>Price: {item.totalCost} € </p>
              <div className="labels">
                <span>{dealOrNoDeal(item.totalCost)}</span>
                {item.allInclusive && (
                  <span className="inclusive">All inclusive </span>
                )}
                </div>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="delete-button"
                >
                  Delete
                </button>
             
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TravelList;
