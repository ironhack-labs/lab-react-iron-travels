import React from "react";

const TravelPlanCard = ({ planElement }) => {
  const renderLabel = (plan) => {
    if (plan.totalCost <= 350) {
      return "Great Deal";
    } else if (plan.totalCost >= 1500) {
      return "Premium";
    } else if (plan.allInclusive) {
      return "All Inclusive";
    } else {
      return null;
    }
  };
  const handleDelete = (planElement) => {
    setTravelPlans(travelPlans.filter((plan) => planElement.id !== plan.id));
  };
  return (
    <>
      <div key={planElement.id} className="card">
        <img src={planElement.image} alt={planElement.destination} />
        <div className="card-info">
          <h3>{planElement.destination}</h3>
          <p>{planElement.description}</p>
          <p>Price: $ {planElement.totalCost}</p>
          {planElement.allInclusive && <p>All Inclusive</p>}
          {renderLabel(planElement) && <p>{renderLabel(planElement)}</p>}
          <button onClick={() => handleDelete(planElement)}> Delete</button>
        </div>
      </div>
    </>
  );
};

export default TravelPlanCard;
