const TravelPlanCard = ({ plan, onDelete, onFavorite, isFavorite }) => {
    return (
      
      <article className="travel-card">
        <img src={plan.image} alt={plan.destination} className="travel-image" />
        <div className="content-text">
        <header className="card-header">
          <h3 className="destination-title">{plan.destination} ({plan.days} Days)</h3>
        </header>
        
        <p className="description">{plan.description}</p>
        <p className="price"><strong>Price:</strong> {plan.totalCost} €</p>
        <div className="tags">
          {plan.totalCost <= 350 && <span className="tag-offer">Great Deal</span>}
          {plan.totalCost >= 1500 && <span className="tag-premium">Premium</span>}
          {plan.allInclusive && <span className="tag-all-inclusive">All-Inclusive</span>}
        </div>
        <div className="card-actions">
          <button className="delete-button" onClick={() => onDelete(plan.id)}>Delete</button>
          <button 
            onClick={() => onFavorite(plan)}
            className={isFavorite ? "favorite-button active" : "favorite-button"}
          >
            {isFavorite ? "❤️" : "♡"}
          </button>
        </div>
        </div>
      </article>
    );
  };
  
  export default TravelPlanCard;
  
  
  