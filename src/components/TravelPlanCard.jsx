const TravelPlanCard = ({ plan }) => {
  return (
    <div className="travel-plan-card">
      <h2>{plan.destination}</h2>
      <p>Departure: {plan.departureDate}</p>
      <p>Return: {plan.returnDate}</p>
      <p>Duration: {plan.duration} days</p>
      <p>Price: {plan.price}</p>
    </div>
  );
};

export default TravelPlanCard;
