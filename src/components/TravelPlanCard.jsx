import React, { useState } from 'react';

const TravelPlanCard = ({ plan, onDelete, onFavorite, showFavoriteButton = false }) => {
  const [favoriteColors] = useState(["purple", "blue", "green", "yellow", "orange", "red"]);
  const [colorIndex, setColorIndex] = useState(0);

  const handleFavoriteClick = () => {
    onFavorite(plan);
    setColorIndex((prevIndex) => (prevIndex + 1) % favoriteColors.length);
  };

  // Iteration 2: Determine labels based on cost and allInclusive
  const getLabels = () => {
    const labels = [];
    
    if (plan.totalCost <= 350) {
      labels.push({ text: "Great Deal", color: "#22c55e" });
    }
    
    if (plan.totalCost >= 1500) {
      labels.push({ text: "Premium", color: "#3b82f6" });
    }
    
    if (plan.allInclusive) {
      labels.push({ text: "All Inclusive", color: "#f59e0b" });
    }
    
    return labels;
  };

  const labels = getLabels();

  return (
    <div style={{
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '16px',
      backgroundColor: 'white',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
    }}>
      <img 
        src={plan.image} 
        alt={plan.destination}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '8px',
          marginBottom: '12px'
        }}
      />
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
        <h3 style={{ margin: '0', fontSize: '1.25rem', fontWeight: 'bold' }}>
          {plan.destination}
        </h3>
        <span style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#1f2937' }}>
          €{plan.totalCost}
        </span>
      </div>
      
      <p style={{ color: '#6b7280', margin: '8px 0', lineHeight: '1.5' }}>
        {plan.description}
      </p>
      
      <p style={{ margin: '8px 0', color: '#374151' }}>
        <strong>Duration:</strong> {plan.days} days
      </p>
      
      {/* Iteration 2: Labels */}
      {labels.length > 0 && (
        <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
          {labels.map((label, index) => (
            <span 
              key={index}
              style={{
                backgroundColor: label.color,
                color: 'white',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}
            >
              {label.text}
            </span>
          ))}
        </div>
      )}
      
      {/* Buttons */}
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
        {/* Bonus Iteration 5: Favorite button */}
        {showFavoriteButton && (
          <button
            onClick={handleFavoriteClick}
            style={{
              backgroundColor: favoriteColors[colorIndex],
              color: 'white',
              border: 'none',
              padding: '8px 12px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            ♡
          </button>
        )}
        {/* Iteration 3: Delete button */}
        <button
          onClick={() => onDelete(plan.id)}
          style={{
            backgroundColor: '#ef4444',
            color: 'white',
            border: 'none',
            padding: '8px 12px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.875rem'
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TravelPlanCard;