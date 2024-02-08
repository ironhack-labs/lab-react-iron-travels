import React from 'react';


{/** It's a different way to pass props to the function */}
const TravelPlanCard = ({ plan, onRemove }) => {
  const { destination, image, days, totalCost, allInclusive } = plan;

  return (
    <div className="travel-plan-card">
      <img src={image} alt={destination} />
      <h3>{destination}</h3>
      <p>Duration: {days} days</p>
      <p>Total Cost: ${totalCost}</p>


      {/* i found that short-circuit evaluation in more concise and works in this case
      but according to some research */}
      {allInclusive && <p>All Inclusive</p>}
      <button onClick={onRemove}>Delete</button>
    </div>
  );
};

export default TravelPlanCard;
