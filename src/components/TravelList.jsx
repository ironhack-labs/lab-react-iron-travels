import React from "react";
import travelPlansData from "../assets/travel-plans.json"; // Assuming your data is here

const TravelList = () => {
  const [travelPlans, setTravelPlans] = React.useState(travelPlansData);

  const handleDelete = (index) => {
    const updatedPlans = [...travelPlans];
    updatedPlans.splice(index, 1);
    setTravelPlans(updatedPlans);
  };

  return (
    <div className="travel-container">
      <div className="travel-cards">
        {travelPlans.map((plan, index) => (
          <div className="travel-card" key={index}>
            <img src={plan.image} alt={plan.destination} />
            <div className="travel-card-info">
              <h3>
                {plan.destination} ({plan.days} Days)
              </h3>
              <p>{plan.description}</p>
              <p>
                Price: {plan.totalCost} €
                {plan.totalCost <= 350 && (
                  <span className="great-deal"> Great Deal!</span>
                )}
                {plan.totalCost >= 1500 && (
                  <span className="premium"> Premium</span>
                )}
              </p>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelList;
