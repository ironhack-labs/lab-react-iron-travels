function FavoriteCard({ plan }) {
  return (
    <div className="favorite-card">
      <img src={plan.image} alt="City look" />
      <h3>
        {plan.destination} ({plan.days} Days)
      </h3>
      <h3>{plan.totalCost} €</h3>
    </div>
  );
}

export default FavoriteCard;
