import React, {useState} from 'react';

const TravelPlanCard = ({ plan, onDelete, onFavorite }) => {
    const [favoriteColorIndex, setFavoriteColorIndex] = useState(0);
    const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
    
    const handleFavorite = () => {
        setFavoriteColorIndex((favoriteColorIndex + 1) % colors.length);
        onFavorite(plan);
      };

    return (
        <div className="travel-plan-card">
        <img src={plan.image} alt={plan.name} style= {{width:"200px", height:"auto"}}className="travel-plan-image" />
        <div className="travel-plan-content">
          <h3 className="travel-plan-name">{plan.name}</h3>
          <p className="travel-plan-description">{plan.description}</p>
          <p className="travel-plan-price">${plan.totalCost}</p>
  
          {/* Condicional para las etiquetas */}
          <div className="labels">
            {plan.totalCost <= 350 && <label className="label great-deal">Great Deal</label>}
            {plan.totalCost >= 1500 && <label className="label premium">Premium</label>}
            {plan.allInclusive && <label className="label all-inclusive">All Inclusive</label>}
          </div>
  
          <button className="delete-button" onClick={() => onDelete(plan.id)}>Delete</button>
          {/* Favorite Button */}
            <button 
                style={{ backgroundColor: colors[favoriteColorIndex] }} 
                onClick={handleFavorite}>
                ♡
            </button>
        </div>
      </div>
    );
}
  
export default TravelPlanCard;

