import React, { useState, useEffect } from 'react';
import travelPlansData from "../assets/travel-plans.json";

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState([]);

  // Load the data into the state
  useEffect(() => {
    setTravelPlans(travelPlansData);
  }, []);

  // Function to remove a travel plan by id
  const handleDelete = (id) => {
    setTravelPlans((prevPlans) => prevPlans.filter(plan => plan.id !== id));
  };

  // Function to determine the label based on total cost
  const getLabel = (totalCost) => {
    if (totalCost <= 350) {
      return "Great Deal";
    } else if (totalCost >= 1500) {
      return "Premium";
    }
    return null;
  };

  // Dynamic styles
  const buttonStyles = {
    base: {
      border: 'none',
      padding: '8px 12px',
      marginTop: '10px',
      cursor: 'pointer',
      borderRadius: '5px',
      fontSize: '14px',
    },
    greatDeal: {
      backgroundColor: 'green',
      color: 'black',
    },
    premium: {
      backgroundColor: 'blue',
      color: 'white',
    },
    allInclusive: {
      backgroundColor: 'blue',
      color: 'white',
    },
    delete: {
      backgroundColor: 'gray',
      color: 'white',
    },
  };

  return (
    <div className="travel-list">
      {travelPlans.length > 0 ? (
        travelPlans.map((plan) => (
          <div key={plan.id} className="travel-card">
            <div className="card-image">
              <img src={plan.image} alt={plan.destination} />
            </div>
            <div className="card-content">
              <h3>{plan.destination} ({plan.days} days)</h3>
              <p>{plan.description}</p>
              <p><strong>Price: ${plan.totalCost}</strong></p>

              {getLabel(plan.totalCost) === "Great Deal" && (
                <button style={{ ...buttonStyles.base, ...buttonStyles.greatDeal }}>Great Deal</button>
              )}
              {getLabel(plan.totalCost) === "Premium" && (
                <button style={{ ...buttonStyles.base, ...buttonStyles.premium }}>Premium</button>
              )}
              {plan.allInclusive && (
                <button style={{ ...buttonStyles.base, ...buttonStyles.allInclusive }}>All Inclusive</button>
              )}
              
              {/* Delete button */}
              <button 
                style={{ ...buttonStyles.base, ...buttonStyles.delete }} 
                onClick={() => handleDelete(plan.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No travel plans available.</p>
      )}
    </div>
  );
};

export default TravelList;

