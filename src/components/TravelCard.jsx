export default function TravelCard({ plan, handleDelete, handleFavorite }) {
    return (
      <div className="planCard">
        <div className="image-container">
          <img className="planImg" src={plan.image} alt="destination pic" />
        </div>
        <div>
          <h2>
            {plan.destination} ({plan.days} days)
          </h2>
          <p>{plan.description}</p>
          <p>
            <strong>Price:</strong> <span>${plan.totalCost}</span>
          </p>
          <p>
            {plan.totalCost > 1500 && <span className="premium">Premium</span>}
            {plan.totalCost < 350 && (
              <span className="great-deal">Great deal!</span>
            )}
            {plan.allInclusive && (
              <span className="all-inclusive">All inclusive</span>
            )}
          </p>
          <button onClick={() => handleDelete(plan.id)}>Delete</button>
          <button onClick={() => handleFavorite(plan.id)}> 💗</button>
        </div>
      </div>
    );
  }