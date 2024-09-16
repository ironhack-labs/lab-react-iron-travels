import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

const TravelList = () => {
  const [travelData, setTravelData] = useState(travelPlansData);

  const handleDelete = (id) => {
    // Filter out the travel plan with the given id
    const updatedData = travelData.filter((item) => item.id !== id);
    // Update the state with the filtered data
    setTravelData(updatedData);
  };

  return (
    <div>
      <h2>Travel List</h2>
      <ul>
        {travelData.map((item) => (
          <li key={item.id}>
            {item.destination} - ${item.totalCost}
            {item.allInclusive && <span> - All Inclusive</span>}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TravelList;
