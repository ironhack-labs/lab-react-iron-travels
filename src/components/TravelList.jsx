import React, { useState } from 'react';
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from './TravelPlanCard';

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);
  const [favorites, setFavorites] = useState([]);

  // Iteration 3: Delete functionality
  const handleDelete = (planId) => {
    setTravelPlans(travelPlans.filter(plan => plan.id !== planId));
  };

  const handleDeleteFavorite = (planId) => {
    setFavorites(favorites.filter(plan => plan.id !== planId));
  };

  // Bonus Iteration 5: Add to favorites
  const handleAddToFavorites = (plan) => {
    // Check if plan is already in favorites
    if (!favorites.find(fav => fav.id === plan.id)) {
      setFavorites([...favorites, plan]);
    }
  };

  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: favorites.length > 0 ? '1fr 1fr' : '1fr',
      gap: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px'
    }}>
      {/* Main travel plans list */}
      <div>
        {travelPlans.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#6b7280', fontSize: '1.125rem' }}>
            No travel plans available
          </p>
        ) : (
          travelPlans.map(plan => (
            <TravelPlanCard 
              key={plan.id}
              plan={plan}
              onDelete={handleDelete}
              onFavorite={handleAddToFavorites}
              showFavoriteButton={true}
            />
          ))
        )}
      </div>
      
      {/* Bonus Iteration 5: Favorites list */}
      {favorites.length > 0 && (
        <div>
          <h2 style={{ 
            fontSize: '1.875rem', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem',
            color: '#374151'
          }}>
            Favorites
          </h2>
          
          {favorites.map(plan => (
            <TravelPlanCard 
              key={`fav-${plan.id}`}
              plan={plan}
              onDelete={handleDeleteFavorite}
              onFavorite={() => {}} // No favorite button in favorites list
              showFavoriteButton={false}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TravelList;