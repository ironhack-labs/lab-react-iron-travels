import React, {useState} from 'react';
import travelPlansData from '../assets/travel-plans.json';
import TravelPlanCard from './TravelPlanCard';

const TravelList = () => {
    const [plans, setPlans] = useState(travelPlansData);
    const [favorites, setFavorites] = useState([]);

    const handleDelete = (id) => {
        setPlans(plans.filter(plan => plan.id !== id));
    };
    const handleFavorite = (plan) => {
        setFavorites([...favorites, plan]);
    };

    return (
        <div>
          <h1>Travel Plans</h1>
          <div style={{ display: "flex" }}>
            <div>
              <h2>All Plans</h2>
              <ul>
                {plans.map((plan) => (
                  <TravelPlanCard key={plan.id} plan={plan} onDelete={handleDelete} onFavorite={handleFavorite} />
                ))}
              </ul>
            </div>
            <div style={{ marginLeft: "20px" }}>
              <h2>Favorites</h2>
              <ul>
                {favorites.map((plan) => (
                  <li key={plan.id}>{plan.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
    );
};
    
export default TravelList;