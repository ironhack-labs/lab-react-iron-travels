import { useState, useEffect } from 'react';
import travelPlansData from '../assets/travel-plans.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import TravelPlanCard from './TravelPlanCard';

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [favoriteColors, setFavoriteColors] = useState({});

  useEffect(() => {
    setTravelPlans(travelPlansData);
  }, []);

  const handleDelete = (id) => {
    setTravelPlans(travelPlans.filter(plan => plan.id !== id));
  };

  const handleFavorite = (id) => {
    const updatedFavorites = favorites.includes(id)
      ? favorites.filter(favId => favId !== id)
      : [...favorites, id];

    setFavorites(updatedFavorites);

    // Change color for the favorite button
    setFavoriteColors(prevColors => ({
      ...prevColors,
      [id]: prevColors[id] ? (prevColors[id] + 1) % 6 : 0
    }));
  };

  const colorOptions = ["purple", "blue", "green", "yellow", "orange", "red"];

  return (
    <div className="container mt-4">
      <h2 className="text-center">Lista de Viajes</h2>
      <ul className="list-group">
        {travelPlans.map(plan => (
          <TravelPlanCard 
            key={plan.id} 
            plan={plan} 
            handleDelete={handleDelete} 
            handleFavorite={handleFavorite} 
            favoriteColor={colorOptions[favoriteColors[plan.id] || 0]} 
          />
        ))}
      </ul>
      <h2 className="text-center mt-4">Favoritos</h2>
      <ul className="list-group">
        {favorites.map(favId => {
          const plan = travelPlans.find(p => p.id === favId);
          return (
            <li key={favId} className="list-group-item">
              <h3>{plan.destination}</h3>
              <p>Costo Total: ${plan.totalCost}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TravelList;
