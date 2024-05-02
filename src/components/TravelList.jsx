import React, { useState, useEffect } from 'react';
import travelPlansData from '../assets/travel-plans.json';
import tracelList from "../components/TravelLIst.css"

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState([]);

  useEffect(() => {
    setTravelPlans(travelPlansData);
  }, []);

  // Function to handle the click of the "Premium" button
  const handlePremiumButtonClick = (destination) => {
    alert(`Premium button clicked for destination: ${destination}`);
    // Add your custom logic here
  };

  // Function to handle the click of the "All Inclusive" button
  const handleAllInclusiveButtonClick = (destination) => {
    alert(`All Inclusive button clicked for destination: ${destination}`);
    // Add your custom logic here
  };

  // Function to handle the click of the "Delete" button
  const handleDeleteButtonClick = (destination) => {
    alert(`Delete button clicked for destination: ${destination}`);
    // Add your custom logic here
  };

  return (
    <div>
      <h2>Travel Plans</h2>
      <ul>
        {travelPlans.map((plan, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', border:"1px solid black", padding: "20px"}}>
            <img src={plan.image} alt={plan.destination} style={{ height: '200px', width: '200px', marginRight: '20px' }} />
            <div>
              <h3>{plan.destination}</h3>
              <p>{plan.days} days</p>
              <p>{plan.description}</p>
              {/* Premium button */}
              <button onClick={() => handlePremiumButtonClick(plan.destination)} style = {{backgroundColor:"skyBlue"}}>Premium</button>
              {/* All Inclusive button */}
              <button onClick={() => handleAllInclusiveButtonClick(plan.destination)} style = {{backgroundColor:"skyBlue"}}>All Inclusive</button>
              {/* Delete button */}
              <button onClick={() => handleDeleteButtonClick(plan.destination)} style = {{backgroundColor:"lightdark", color:"white"}}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TravelList;
