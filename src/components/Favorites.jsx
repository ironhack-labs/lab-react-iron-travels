function Favorite({ favorites, onRemove }) {
  return (
    <div>
      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favorites.map((plan) => (
          <div key={plan.id} className="travel-card">
            <img src={plan.image} alt={plan.destination} width={200} />
            <h3>{plan.destination}</h3>
            <p>Duration: {plan.days} days</p>
            <p>Total Cost: ${plan.totalCost}</p>
            <button onClick={() => onRemove(plan.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Favorite;