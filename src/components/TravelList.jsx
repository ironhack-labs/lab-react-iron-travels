import React, { useState, useEffect } from "react";
import "./TravelList.css";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState([]);

  useEffect(() => {
    setTravelPlans(travelPlansData);
  }, []);

  const getCostLabel = (totalCost) => {
    if (totalCost <= 350) {
      return "Great Deal";
    } else if (totalCost >= 1500) {
      return "Premium";
    }
    return "";
  };

  const handleDelete = (id) => {
    // Create a new array without the item at the specified id
    const updatedTravelPlans = travelPlans.filter((_, i) => i !== id);
    setTravelPlans(updatedTravelPlans);
  };

  return (
    <div>
      <h1>Travel Plans</h1>
      <ul className="content">
        {travelPlans.map((item, id) => (
          <li key={id}>
            <img style={{ maxWidth: 300 }} src={item.image} alt="" />
            <h2>{item.destination}</h2>
            <p>{item.description}</p>
            <p>Pirce : {item.totalCost} $</p>
            <p>
              {getCostLabel(item.totalCost)}
              {item.allInclusive && <span> | All Inclusive</span>}
            </p>
            <button onClick={() => handleDelete(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TravelList;
