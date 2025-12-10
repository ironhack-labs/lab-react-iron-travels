import {useState} from 'react';
import travelPlansData from "../assets/travel-plans.json"

const TravelList = () => {
  const [trips, setTrips] = useState(travelPlansData);
  
   const getLabels = (totalCost, allInclusive) => {
    const labels = [];
    
    if (totalCost <= 350) {
      labels.push('Great Deal');
    }
    
    if (totalCost >= 1500) {
      labels.push('Premium');
    }
    
    if (allInclusive) {
      labels.push('All Inclusive');
    }
    
    return labels;
  }; 
  
  const handleDelete = (id) => {
    setTrips(trips.filter(trip => trip.id !== id));
  };
  
   return (
    <div className="travel-list">
  {trips.map((oneTrip) => {
    const labels = getLabels(oneTrip.totalCost, oneTrip.allInclusive);
    return (
      <div key={oneTrip.id} className="travel-item">
        <img src={oneTrip.image} alt={oneTrip.destination} className="travel-image" />
        <p className="travel-destination">{oneTrip.destination}</p>
        {labels.length > 0 && (
          <div className="labels">
            {labels.map((label) => (
              <span key={label} className={`label ${label.toLowerCase().replace(' ', '-')}`}>
                {label}
              </span>
            ))}
          </div>
        )}
        <button 
          className="delete-btn" 
          onClick={() => handleDelete(oneTrip.id)}
        >
          Delete
        </button>
      </div>
    );
  })}
</div>
  )
}

export default TravelList