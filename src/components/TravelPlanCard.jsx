function TravelPlanCard({ plan }) {
  return (
    <li className="travel-item">
      <img src={plan.image} alt={plan.destination} className="travel-image" />
      <h2>
        {plan.destination} ({plan.days} Days)
      </h2>
      <p>{plan.description}</p>
      <p>
        <strong>Price:</strong> {plan.totalCost}€
      </p>

      {plan.totalCost < 350 && (
        <button className="great-deal">Great Deal</button>
      )}

      {plan.totalCost > 1500 && <button className="premium">Premium</button>}

      {plan.allInclusive && <button>All-Inclusive</button>}
    </li>
  );
}

export default TravelPlanCard;
